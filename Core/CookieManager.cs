using System;
using System.Web;
using Microsoft.AspNetCore.Http;

namespace EvoWeb.Core
{
    public class CookieManager
    {
        // Cookie létrehozása
        public static void CreateCookie(HttpContext httpContext, string name, string value, int expireDays)
        {
            httpContext.Response.Cookies.Append(name, value, new CookieOptions
            {
                Expires = DateTime.Now.AddDays(expireDays)
            });
        }
        // Cookie lekérdezése
        public static string GetCookie(HttpContext httpContext, string name)
        {
            if (httpContext.Request.Cookies.TryGetValue(name, out string value))
            {
                return value;
            }
            return null;
        }
        // Cookie törlése
        public static void DeleteCookie(HttpContext httpContext, string name)
        {
            httpContext.Response.Cookies.Delete(name);
        }
    }
}

