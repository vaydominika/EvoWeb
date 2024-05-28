using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.CurrentContext = HttpContext;
            return View();
        }
    }
}
