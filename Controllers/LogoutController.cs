using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class LogoutController : Controller
    {
        public async Task<IActionResult> Index()
        {

            LogoutRequest logout = new LogoutRequest();
            await logout.GetDataFromApi(CookieManager.GetCookie(HttpContext, "session_id"));
            CookieManager.DeleteCookie(HttpContext, "session_id");

            return RedirectToAction("Index", "Login"); ;
        }
    }
}
