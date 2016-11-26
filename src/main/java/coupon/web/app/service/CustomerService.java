package coupon.web.app.service;

import com.couponsystem.facadedao.ClientType;
import com.couponsystem.facadedbdao.CustomerFacade;
import com.couponsystem.beans.Coupon;
import com.couponsystem.beans.Coupon.CouponType;
import coupon.web.app.logger.AppLogger;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Path("/customer")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CustomerService
    {
        private final ClientType clientType = ClientType.CUSTOMER;
        private static Logger customerLogger = AppLogger.getLogger(CustomerService.class);

        @GET
        @Path("/buy")
        public Collection<Coupon> showAllCoupons(@Context HttpServletRequest request) throws Exception
            {
                customerLogger.info("Customer is getting all of its coupons");
                return ((CustomerFacade) Login.getFacade(request, this.clientType)).getAllPurchasedCoupons();

            }

        @POST
        @Path("/coupons/{couponId}")
        public void purchaseCoupon(@Context HttpServletRequest request, Coupon couponId) throws Exception
            {
                customerLogger.info("Customer is purchasing a coupon");
                ((CustomerFacade) Login.getFacade(request, this.clientType)).purchaseCoupon(couponId);
                customerLogger.info("Customer has purchased a coupon successfully");
            }

        @GET
        @Path("/coupons")
        public Collection<Coupon> getAllPurchasedCoupons(@Context HttpServletRequest request) throws Exception
            {
                customerLogger.info("Customer is getting all of his purchased coupons");
                return ((CustomerFacade) Login.getFacade(request, this.clientType)).getAllPurchasedCoupons();
            }

        @GET
        @Path("/coupons/price/{price}")
        public Collection<Coupon> getAllPurchasedCouponsByPrice(@Context HttpServletRequest request, @PathParam("price") double price) throws Exception
            {
                customerLogger.info("Customer is getting all of his coupons by price");
                return ((CustomerFacade) Login.getFacade(request, this.clientType)).getAllPurchasedCouponsByPrice(price);
            }

        @GET
        @Path("/coupons/type/{type}")
        public Collection<Coupon> getAllPurchasedCouponsByType(@Context HttpServletRequest request, CouponType couponType) throws Exception
            {
                customerLogger.info("Customer is getting all of his coupons by type");
                return ((CustomerFacade) Login.getFacade(request, this.clientType)).getAllPurchasedCouponsByType(couponType);
            }

    }

