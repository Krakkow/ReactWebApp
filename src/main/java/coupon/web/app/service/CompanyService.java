package coupon.web.app.service;

import com.couponsystem.beans.Coupon;
import com.couponsystem.beans.Coupon.CouponType;
import com.couponsystem.facadedao.ClientType;
import com.couponsystem.facadedbdao.CompanyFacade;
import coupon.web.app.logger.AppLogger;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.sql.Date;
import java.util.Collection;

@Path("/company")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CompanyService
    {
        private final ClientType clientType = ClientType.COMPANY;
        private static Logger companyLogger = AppLogger.getLogger(CompanyService.class);

        @GET
        @Path("/coupons")
        public Collection<Coupon> getCouponsOfCompany(@Context HttpServletRequest request) throws Exception
            {
                companyLogger.info("Company is getting all of its coupons");
                return ((CompanyFacade) Login.getFacade(request, this.clientType)).getAllCoupons();
            }

        @GET
        @Path("/coupons/date/{date}")
        public Collection<Coupon> getCouponByDate(@Context HttpServletRequest request, @PathParam("date") String date) throws Exception
            {
                companyLogger.info("Company is getting all of its coupon by date");
                return ((CompanyFacade) Login.getFacade(request, this.clientType)).getCouponByDate(Date.valueOf(date));
            }

        @GET
        @Path("/coupons/type/{type}")
        public Collection<Coupon> getCouponByType(@Context HttpServletRequest request, @PathParam("type") String couponType) throws Exception
            {
                companyLogger.info("Company is getting all of its coupons by type");
                return ((CompanyFacade) Login.getFacade(request, this.clientType)).getCouponsByType(CouponType.valueOf(couponType));
            }

        @GET
        @Path("/coupons/price/{price}")
        public Collection<Coupon> getCouponUpToPrice(@Context HttpServletRequest request, @PathParam("price") double price) throws Exception
            {
                companyLogger.info("Company is getting all of its coupons by price");
                return ((CompanyFacade) Login.getFacade(request, this.clientType)).getCouponsByPrice(price);
            }

        @POST
        @Path("/coupons")
        public void createCoupon(@Context HttpServletRequest request, Coupon coupon) throws Exception
            {
                companyLogger.info("Company is creating a new coupon");
                ((CompanyFacade) Login.getFacade(request, this.clientType)).createCoupon(coupon);
                companyLogger.info("Company has created a new coupon successfully");
            }

        @DELETE
        @Path("/coupons/{couponId}")
        public void removeCoupon(@Context HttpServletRequest request, Coupon couponId) throws Exception
            {
                companyLogger.info("company is deleting a coupon");
                ((CompanyFacade) Login.getFacade(request, this.clientType)).deleteCoupon(couponId);
                companyLogger.info("Company has been deleted a coupon successfully");

            }

        @PUT
        @Path("/coupons/{couponId}")
        public void updateCoupon(@Context HttpServletRequest request, Coupon coupon, @PathParam("couponId") long couponId) throws Exception
            {
                companyLogger.info("Company has updated a coupon successfully");
                ((CompanyFacade) Login.getFacade(request, this.clientType)).updateCoupon(couponId, coupon.getEndDate(), coupon.getPrice());
                companyLogger.info("Coupon has been updated successfully by company");
            }


    }
