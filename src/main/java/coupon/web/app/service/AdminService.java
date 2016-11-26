package coupon.web.app.service;

import com.couponsystem.facadedbdao.AdminFacade;
import com.couponsystem.facadedao.ClientType;
import com.couponsystem.beans.Company;
import com.couponsystem.beans.Customer;
import coupon.web.app.logger.AppLogger;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.Collection;

@Path("/admin")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminService
    {
        private static Logger adminLogger = AppLogger.getLogger(AdminService.class);
        private final ClientType clientType = ClientType.ADMIN;

        @POST
        @Path("/customers/customer")
        public void createCustomer(@Context HttpServletRequest request, Customer customer) throws Exception
            {
                adminLogger.info("Admin is creating a new Customer");
                ((AdminFacade) Login.getFacade(request, this.clientType)).createCustomer(customer);
                adminLogger.info("New customer has been created successfully by Admin");
            }

        @DELETE
        @Path("/customers/{customerId}")
        public void removeCustomer(@Context HttpServletRequest request, @PathParam("customerId") long customerId) throws Exception
            {
                adminLogger.info("Admin is deleting a customer");
                ((AdminFacade) Login.getFacade(request, this.clientType)).deleteCustomer(customerId);
                adminLogger.info("Customer has been deleted successfully by Admin");
            }

        @PUT
        @Path("/customers/{customerId}")
        public void updateCustomer(@Context HttpServletRequest request, Customer customer, @PathParam("customerId") long customerId) throws Exception
            {
                adminLogger.info("Admin is updating a customer");
                ((AdminFacade) Login.getFacade(request, this.clientType)).updateCustomer(customer);
                adminLogger.info("Customer has been updated successfully by Admin");
            }

        @GET
        @Path("/customers/{customerId}")
        public Customer getCustomer(@Context HttpServletRequest request, @PathParam("customerId") long customerId) throws Exception
            {
                adminLogger.info("Admin is getting a customer");
                return ((AdminFacade) Login.getFacade(request, this.clientType)).getCustomer(customerId);
            }

        @GET
        @Path("/customers")
        public Collection<Customer> getAllCustomer(@Context HttpServletRequest request) throws Exception
            {
                adminLogger.info("Admin is getting all customers");
                return ((AdminFacade) Login.getFacade(request, this.clientType)).getAllCustomers();
            }

        @POST
        @Path("/companies")
        public void createCompany(@Context HttpServletRequest request, Company company) throws Exception

            {
                adminLogger.info("Admin is creating a company");
                ((AdminFacade) Login.getFacade(request, this.clientType)).createCompany(company);
                adminLogger.info("Company has been created successfully by Admin");
            }

        @DELETE
        @Path("/companies/{companyId}")
        public void removeCompany(@Context HttpServletRequest request, @PathParam("companyId") long companyId) throws Exception
            {
                adminLogger.info("Admin is deleting a company");
                ((AdminFacade) Login.getFacade(request, this.clientType)).deleteCompany(companyId);
                adminLogger.info("Company has been deleted successfully by Admin");
            }

        @PUT
        @Path("/companies/{companyId}")
        public void updateCompany(@Context HttpServletRequest request, Company company, @PathParam("companyId") long companyId) throws Exception
            {
                adminLogger.info("Admin is updating a company");
                ((AdminFacade) Login.getFacade(request, this.clientType)).updateCompany(company);
                adminLogger.info("Company has been updated successfully by Admin");
            }

        @GET
        @Path("/companies/{companyId}")
        public Company getCompany(@Context HttpServletRequest request, @PathParam("companyId") long companyId) throws Exception
            {
                adminLogger.info("Admin is retrieving a company");
                return ((AdminFacade) Login.getFacade(request, this.clientType)).getCompany(companyId);
            }

        @GET
        @Path("/companies")
        public Collection<Company> getAllCompanies(@Context HttpServletRequest request) throws Exception
            {
                adminLogger.info("Admin is retrieving all companies");
                return ((AdminFacade) Login.getFacade(request, this.clientType)).getAllCompanies();
            }


    }

