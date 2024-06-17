using EvoWeb.Core.Session;
using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    public class ProfileController : Controller
    {
        public async Task<IActionResult> Index(string user)
        {
            bool valid = await Valid();
            ViewBag.CurrentContext = HttpContext;

            bool self = (user.ToLower() == CookieManager.GetCookie(HttpContext, "self"));

            if (valid)
            {

                ProfileRequest checkprofile = new ProfileRequest();
                await checkprofile.GetDataFromApi(CookieManager.GetCookie(HttpContext, "session_id"), user);

                ProfileResponse result = checkprofile.GetResult();

                ViewBag.BannerURL = result.bannerURL;
                ViewBag.AvatarURL = result.avatarURL;
                ViewBag.DisplayName = result.displayName;
                ViewBag.Pronouns = result.pronouns;
                ViewBag.Username = result.username;
                ViewBag.Bio = result.bio;
                ViewBag.Location = result.location;
                ViewBag.DateOfBirth = result.dateOfBirth;
                ViewBag.Followers = result.followers;
                ViewBag.Following = result.following;
                ViewBag.IsFollowing = result.isFollowing;
                ViewBag.Self = self;
                ViewBag.SessionID = CookieManager.GetCookie(HttpContext, "session_id");
                ViewBag.TargetUsername = user;
                ViewBag.Posts = result.posts;

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
