package coupon.web.app.tests;

import coupon.web.app.logger.AppLogger;
import coupon.web.app.service.Login;
import com.couponsystem.exceptions.DAOException;
import com.couponsystem.beans.Company;
import com.couponsystem.beans.Coupon;
import com.couponsystem.beans.Customer;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Collection;

@Path("/test")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TestJson
    {
        private static Logger testLogger = AppLogger.getLogger(TestJson.class);

        @GET
        @Path("/companies")
        public Collection<Company> getAllCompanies(@Context HttpServletRequest req) throws DAOException
            {
                testLogger.info("Getting all companies...");

                return Login.couponSys.comapnyDao.getAll();
            }

        @POST
        @Path("/customers")
        public void createCustomer(Customer customer) throws DAOException
            {
                testLogger.info("Creating a customer");
                Login.couponSys.customerDao.create(customer);
            }

        @DELETE
        @Path("/customers/{customerId}")
        public void removeCustomer(@PathParam("customerId") long customerId) throws DAOException
            {
                testLogger.info("Deleting a customer");
                Login.couponSys.customerDao.delete(customerId);
            }


        @PUT
        @Path("/customers/{customerId}")
        public Customer updateCustomer(Customer customer) throws DAOException
            {
                testLogger.info("Updating a customer");
                Login.couponSys.customerDao.update(customer);
                return Login.couponSys.customerDao.read(customer.getId());
            }

        @GET
        @Path("/customers/{customerId}")
        public Customer getCustomer(@PathParam("customerId") long customerId) throws DAOException
            {
                testLogger.info("Getting a customer...");
                return Login.couponSys.customerDao.read(customerId);
            }


        @GET
        @Path("/customers")
        public Collection<Customer> getAllCustomers() throws DAOException
            {
                testLogger.info("Getting all customers...");
                return Login.couponSys.customerDao.getAll();
            }

        @GET
        @Path("/coupons/{couponId}")
        public Coupon getCoupon(@PathParam("couponId") long id) throws DAOException
            {
                testLogger.info("Getting a coupon...");
                return Login.couponSys.couponDao.read(id);
            }

        @GET
        @Path("/coupons")
        public Collection<Coupon> getAllCoupon() throws DAOException
            {
                testLogger.info("Getting all coupons...");
                return Login.couponSys.couponDao.getAll();
            }

        @POST
        @Path("/companies")
        public void createCompany(Company company) throws DAOException
            {
                testLogger.info("Creating a company");
                Login.couponSys.comapnyDao.create(company);
            }

        @POST
        @Path("/coupons")
        public void createCoupon(Coupon coupon) throws DAOException
            {
                testLogger.info("Creating a coupon");
                Login.couponSys.couponDao.create(coupon);
            }

        @DELETE
        @Path("/companies/{companyId}")
        public void removeCompany(@PathParam("companyId") long companyId) throws DAOException
            {
                testLogger.info("Deleting a company");
                Login.couponSys.comapnyDao.delete(companyId);
            }

        @PUT
        @Path("/companies")
        public void updateCompany(Company company) throws DAOException
            {
                testLogger.info("Updating a company");
                Login.couponSys.comapnyDao.update(company);
            }

        @GET
        @Path("/companies/{companyId}")
        public Company getCompany(@PathParam("companyId") long companyId) throws DAOException
            {
                testLogger.info("Getting a company");
                return Login.couponSys.comapnyDao.read(companyId);
            }

//        @GET
//        @Path("/coupons/purchase/{couponId}")
//        public void purchaseCoupon(@Context HttpServletRequest request, @PathParam("couponId") long couponId) throws DAOException
//            {
//                testLogger.info("Purchasing a coupon");
//                Login.couponSys.customerDao.purchaseCouponToCustomer(couponId, 7);
//            }


    }