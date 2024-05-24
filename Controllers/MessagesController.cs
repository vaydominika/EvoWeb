using EvoWeb.Core.Session;
using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class MessagesController : Controller
    {
        public async Task<IActionResult> Index()
        {
            bool valid = await Valid();

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
