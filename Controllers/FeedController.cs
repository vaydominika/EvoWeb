using EvoWeb.Core;
using EvoWeb.Core.Session;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace EvoWeb.Controllers
{
    public class FeedController : Controller
    {
        public async Task<IActionResult> Index()
        {
            bool valid = await Valid();
            ViewBag.CurrentContext = HttpContext;

            if (valid)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
        }

        public async Task<bool> Valid()
        {
            if (await Session.IsAuthenticated(CookieManager.GetCookie(HttpContext, "session_id")))
            {
                return true;
            }

            return false;
        }
    }
}
