using EvoWeb.Core;
using Microsoft.AspNetCore.Mvc;

namespace EvoWeb.Controllers
{
    [Route("apimirror/v1/[controller]")]
    [ApiController]
    public class SearchUserMirrorController : ControllerBase
    {

        public async Task<SearchUserResponse> Index(string query)
        {
            SearchUserRequest checkprofile = new SearchUserRequest();
            await checkprofile.GetDataFromApi(query);

            SearchUserResponse result = checkprofile.GetResult();

            if (result != null)
            {
                return result;
            }
            else
            {
                return new SearchUserResponse() { results = new List<CompletionEntry>() };
            }

        }


    }
}
