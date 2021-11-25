"use strict";(self.webpackChunkios_cfw_guide=self.webpackChunkios_cfw_guide||[]).push([[8830],{5026:(e,n,o)=>{o.r(n),o.d(n,{data:()=>l});const l={key:"v-361d9030",path:"/using-odysseyn1x/",title:"Using Odysseyn1x",lang:"en_US",frontmatter:{lang:"en_US",title:"Using Odysseyn1x",excerpt:"Guide to installing checkra1n via Odysseyn1x",permalink:"/using-odysseyn1x",redirect_from:["/installing-odysseyn1x","/using-odysseynix","/using-bootra1n","/using-bootrain","/using-checkn1x","/using-checknix"]},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Flashing Odysseyn1x",slug:"flashing-odysseyn1x",children:[]},{level:2,title:"Running checkra1n",slug:"running-checkra1n",children:[]},{level:2,title:"The Odysseyra1n script",slug:"the-odysseyra1n-script",children:[]},{level:2,title:"Installing packages",slug:"installing-packages",children:[]}],filePathRelative:"en_US/jailbreak/checkra1n/using-odysseyn1x/index.md",git:{updatedTime:1637832015e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:6}]}}},80130:(e,n,o)=>{o.r(n),o.d(n,{default:()=>G});var l=o(66252);const i=(0,l._)("div",{class:"custom-container warning"},[(0,l._)("p",{class:"custom-container-title"},"WARNING"),(0,l._)("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),t=(0,l.Uk)("Odysseyra1n is a "),a=(0,l.Uk)("semi-tethered jailbreak"),s=(0,l.Uk)(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more."),r=(0,l._)("p",null,"Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS devices with A7 to A11 SoC's on firmwares 12.0 to 14.8.1.",-1),u=(0,l._)("p",null,"After installing checkra1n, we'll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.",-1),d=(0,l._)("p",null,"On iOS 14:",-1),c=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Odysseyra1n is only fully supported on A8(X), A9, A10(X), and A11 devices. A9X devices are only fully supported up to 14.4.2 using an older version of checkra1n, with a special method required for A9X devices on 14.5 to 14.8.1, which is detailed at "),(0,l._)("a",{href:"/installing-odysseyra1n-a9x"},"Installing Odysseyra1n (A9X)"),(0,l.Uk)(".")]),(0,l._)("li",null,"A11 devices do not allow you to use SEP functionality in a jailbroken state. SEP functionality are things such as a passcode, Face ID/Touch ID, and Apple Pay.")],-1),h=(0,l._)("h2",{id:"requirements",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,l.Uk)(" Requirements")],-1),y=(0,l._)("li",null,"256MB or greater USB Drive",-1),p=(0,l.Uk)("The latest version of "),g={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("Odysseyn1x"),k=(0,l.Uk)("If you are on an A9X device, you should instead get the v2.9 release of "),m={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.9",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("Odysseyn1x"),w=(0,l._)("li",null,'For 64-bit computers, download the "AMD64" version',-1),_=(0,l._)("li",null,'For 32-bit computers, download the "i686" version',-1),v={href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("balenaEtcher"),O=(0,l.uE)('<p><img src="/assets/images/Odysseyn1x.png" alt="A screenshot of the Odysseyn1x menu"></p><h2 id="flashing-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#flashing-odysseyn1x" aria-hidden="true">#</a> Flashing Odysseyn1x</h2><ol><li>Download and install balenaEtcher</li><li>Click <code>Flash from file</code></li><li>Select the odysseyn1x <code>.iso</code> file</li><li>Click <code>Select target</code></li><li>Select the USB drive you would like to boot from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Flash!</code><ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once the flashing has completed, reboot your computer</li><li>Go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2>',4),U=(0,l.uE)("<li>Once you have loaded odysseyn1x, select <code>checkra1n</code><ul><li>If you&#39;re on A11, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on A9X and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2),S=(0,l.Uk)("You will now be presented with instructions in how to reboot your device into "),q=(0,l.Uk)("DFU mode"),A=(0,l.Uk)(", click "),C=(0,l._)("code",null,"Start",-1),I=(0,l.Uk)(" to begin "),D=(0,l._)("ul",null,[(0,l._)("li",null,"Follow the instructions until your device reboots to a black screen")],-1),T=(0,l._)("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),B=(0,l.uE)('<h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2><p>The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.</p><ol><li>Unlock your device</li><li>Ensure that your computer is trusted by your device</li><li>Select <code>Odysseyra1n</code> in Odysseyn1x</li><li>Sileo should install to your device</li><li>Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',4),E=(0,l.Uk)("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),R=(0,l.Uk)("tweaks"),P=(0,l.Uk)(", themes, packages and more."),j=(0,l.uE)('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3),F={},G=(0,o(83744).Z)(F,[["render",function(e,n){const o=(0,l.up)("RouterLink"),F=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("p",null,[t,(0,l.Wm)(o,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:(0,l.w5)((()=>[a])),_:1}),s]),r,u,d,c,h,(0,l._)("ul",null,[y,(0,l._)("li",null,[p,(0,l._)("a",g,[f,(0,l.Wm)(F)]),(0,l._)("ul",null,[(0,l._)("li",null,[k,(0,l._)("a",m,[b,(0,l.Wm)(F)])]),w,_])]),(0,l._)("li",null,[(0,l._)("a",v,[x,(0,l.Wm)(F)])])]),O,(0,l._)("ol",null,[U,(0,l._)("li",null,[S,(0,l.Wm)(o,{to:"/faq/#what-is-dfu-mode"},{default:(0,l.w5)((()=>[q])),_:1}),A,C,I,D]),T]),B,(0,l._)("p",null,[E,(0,l.Wm)(o,{to:"/faq/#what-are-tweaks"},{default:(0,l.w5)((()=>[R])),_:1}),P]),j],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,l]of n)o[e]=l;return o}}}]);