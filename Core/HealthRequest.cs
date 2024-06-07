using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Core
{
    public class HealthRequest : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
