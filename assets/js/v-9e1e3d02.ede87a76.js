"use strict";(self.webpackChunkios_cfw_guide=self.webpackChunkios_cfw_guide||[]).push([[18],{67132:(e,i,a)=>{a.r(i),a.d(i,{data:()=>n});const n={key:"v-9e1e3d02",path:"/installing-unc0ver/",title:"Installing unc0ver",lang:"en_US",frontmatter:{lang:"en_US",title:"Installing unc0ver",description:"Guide to installing unc0ver",permalink:"/installing-unc0ver",redirect_from:"/installing-uncover"},excerpt:"",headers:[{level:2,title:"Downloads",slug:"downloads",children:[]},{level:2,title:"Installing the application",slug:"installing-the-application",children:[]},{level:2,title:"Trusting the application",slug:"trusting-the-application",children:[]},{level:2,title:"Running unc0ver",slug:"running-unc0ver",children:[]}],filePathRelative:"en_US/jailbreak/installing-unc0ver/index.md",git:{updatedTime:1637832015e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:5},{name:"Michael McAuliff",email:"michaeltechse@gmail.com",commits:2},{name:"kawaiizenbo",email:"48113593+kawaiizenbo@users.noreply.github.com",commits:1}]}}},43266:(e,i,a)=>{a.r(i),a.d(i,{default:()=>G});var n=a(66252);const t=(0,n.Uk)("unc0ver is a "),l=(0,n.Uk)("semi-untethered jailbreak"),o=(0,n.Uk)(", meaning it requires a app to re-apply the exploit after a reboot."),r=(0,n.uE)('<p>The tool is capable of jailbreaking nearly every iOS device on firmware version 11.0 up to 14.3, however, for our purposes, it will be used to jailbreak devices in which no easier option is available.</p><p>Due to how semi-untethered jailbreaks work, the app will need to be <a href="/resigning-apps">re-signed</a> once every 7 days.</p><p>We will use Sideloadly to install the unc0ver jailbreak application to your iOS device for use in the next step.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are already jailbroken with another jailbreak, make sure to properly <a href="/restoring-rootfs">remove it</a> before proceeding.</p></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2><div class="custom-container tip" id="ifJailbreaksAppSigned"><p> unc0ver is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer. </p></div>',6),s=(0,n.Uk)("The 5.3.1 version of "),u={href:"https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("unc0ver"),c=(0,n.Uk)("Users on firmware versions 12.4.9 - 12.5.4, 13.5.1 - 13.7, and 14.0 - 14.3 should download the 6.1.1 version of "),p={href:"https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("unc0ver"),m=(0,n.Uk)(" instead"),g=(0,n.Uk)("Users on firmware version 12.5.5 should download the latest version of "),v={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("unc0ver"),k=(0,n.Uk)(" instead"),w=(0,n.Uk)("The latest version of "),b={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("Sideloadly"),_=(0,n.Uk)("The latest version of "),U={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("iTunes"),I=(0,n.Uk)(" if on Windows"),S=(0,n.uE)('<p><img src="/assets/images/sideloadly_win.png" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the unc0ver <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The unc0ver application can now be opened from home screen.</p><h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the unc0ver application from your home screen immediately afterwards <ul><li>If unc0ver warns you that the app has been tampered with, reinstall unc0ver via Sideloadly</li></ul></li><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',10),D={class:"custom-container warning"},j=(0,n._)("p",{class:"custom-container-title"},"WARNING",-1),O=(0,n.Uk)("If you receive the error "),W=(0,n._)("code",null,"rootFS already mounted, delete the OTA update",-1),A=(0,n.Uk)(", read the "),q=(0,n.Uk)("Troubleshooting"),x=(0,n.Uk)(" page"),R=(0,n.Uk)("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),C=(0,n.Uk)("tweaks"),M=(0,n.Uk)(", themes and more."),P=(0,n.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you wish to use a more modern package manager, and are on iOS 12.0 or higher, continue to <a href="/installing-sileo">Installing Sileo</a></p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To learn how to use Cydia, continue to <a href="using-cydia">Using Cydia</a></p></div>',2),E={},G=(0,a(83744).Z)(E,[["render",function(e,i){const a=(0,n.up)("RouterLink"),E=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",null,[t,(0,n.Wm)(a,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:(0,n.w5)((()=>[l])),_:1}),o]),r,(0,n._)("ul",null,[(0,n._)("li",null,[s,(0,n._)("a",u,[d,(0,n.Wm)(E)]),(0,n._)("ul",null,[(0,n._)("li",null,[c,(0,n._)("a",p,[h,(0,n.Wm)(E)]),m]),(0,n._)("li",null,[g,(0,n._)("a",v,[f,(0,n.Wm)(E)]),k])])]),(0,n._)("li",null,[w,(0,n._)("a",b,[y,(0,n.Wm)(E)])]),(0,n._)("li",null,[_,(0,n._)("a",U,[T,(0,n.Wm)(E)]),I])]),S,(0,n._)("div",D,[j,(0,n._)("p",null,[O,W,A,(0,n.Wm)(a,{to:"/troubleshooting/#rootfs-already-mounted"},{default:(0,n.w5)((()=>[q])),_:1}),x])]),(0,n._)("p",null,[R,(0,n.Wm)(a,{to:"/faq/#what-are-tweaks"},{default:(0,n.w5)((()=>[C])),_:1}),M]),P],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,n]of i)a[e]=n;return a}}}]);