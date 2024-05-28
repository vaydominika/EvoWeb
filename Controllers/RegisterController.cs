using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.CurrentContext = HttpContext;
            return View();
        }
    }
}
