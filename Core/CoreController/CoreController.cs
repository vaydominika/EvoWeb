using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace EvoWeb.Core.CoreController
{
    public class CoreController : Controller
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            ViewBag.CurrentContext = HttpContext;

            base.OnActionExecuting(filterContext);
        }
    }
}
