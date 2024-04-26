using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
