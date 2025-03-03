using DemoPurpose.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoPurpose.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly DemoPurposeContext _context;
        public HomeController(DemoPurposeContext context)
        {
            _context = context;
        }



        [HttpGet("GetBusinessPartners")]
        public IActionResult GetBusinessPartners()
        {
            try
            {
                List<BusinessPartner> businessPartners = _context.BusinessPartners.OrderByDescending(x => x.Id).ToList();
                return Ok(businessPartners);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("SaveBusinessPartner")]
        public IActionResult SaveBusinessPartner(BusinessPartner modal)
        {
            try
            {
                if (modal == null)
                {
                    return BadRequest("Please Enter Required Details...!");
                }
                if (modal.Id == 0)
                {
                    modal.CreatedBy = "Faizan";
                    modal.CreatedById = 1;
                    modal.CreatedDate = DateOnly.FromDateTime(DateTime.Now);
                    modal.ModifiedBy = "Faizan";
                    modal.ModifiedById = 1;
                    modal.ModifiedDate = DateOnly.FromDateTime(DateTime.Now);
                    _context.BusinessPartners.Add(modal);
                }
                else
                {
                    modal.ModifiedBy = "Faizan";
                    modal.ModifiedById = 1;
                    modal.ModifiedDate = DateOnly.FromDateTime(DateTime.Now);
                    _context.BusinessPartners.Update(modal);

                }
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("ViewBusinessPartner/{Id}")]
        public IActionResult ViewBusinessPartner(int Id)
        {
            try
            {
                BusinessPartner businessPartner = _context.BusinessPartners.Where(x => x.Id == Id).FirstOrDefault();
                return Ok(businessPartner);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
