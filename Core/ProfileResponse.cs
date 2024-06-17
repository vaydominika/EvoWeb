namespace EvoWeb.Core
{
    public class ProfileResponse
    {
        public bool error { get; set; }
        public string response {  get; set; }
        public string username {  get; set; }
        public string displayName {  get; set; }
        public string bio { get; set; }
        public string dateOfBirth { get; set; }
        public string location { get; set; }
        public string avatarURL { get; set; }
        public string bannerURL { get; set; }
        public string pronouns { get; set; }
        public int followers { get; set; }
        public int following { get; set; }
        public bool isFollowing { get; set; }
        public string posts { get; set; }
    }
}
