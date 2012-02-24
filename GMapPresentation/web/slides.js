var slides = [
           {
        	   title: "Overview",
        	   contents: 
        		   "Presentation is available at:<br>" +
        		   "https://github.com/bithooked/Presentations" +
        		   "<ul>" +
        	   		  "<li>History of Open</li>" +
        	   		  "<li>Characteristics of Open</li>" +
        	   		  "<li>Impact of Open</li>" +
        	   		  "<li>MasterCard's OpenAPI</li>" +
        	   		  "<li>Future of Open</li>" +
    	   		   "</ul>",
        	   zoom: 18,
        	   point: new google.maps.LatLng(32.95982, -96.64095)
        	   
           },
           {
        	   title: "About MasterCard",
        	   contents: 
        		   "<ul>" +
        	   		  "<li>A technology company</li>" +
        	   		  "<li>Over 1.7 billion MasterCard-branded cards</li>" +
        	   		  "<li>We have issued 0 cards</li>" +
        	   		  "<li>210 Countries, 150 currencies, 2200 financial institutions, 32 million merchant locations</li>" +
        	   		  "<li>$2.7 Trillion spent in 2010</li>" +
        	   		  "<li>~43,000 transactions per minute</li>" +
        	   		  "<li>Average txn 130 milliseconds</li>" +
        	   		  "<li>Many petabytes of data in our warehouse</li>" +
    	   		   "</ul>",
        	   zoom: 16,
        	   point: new google.maps.LatLng(41.02449, -73.71508)
        	   
           },
           {
        	   title: "History of Open Source",
        	   contents: 
        		   "<ul>" +
        	   		  "<li>Books - 1980's</li>" +
        	   		  "<li>WWIV BBS - 1980s</li>" +
        	   		  "<li>Invention of GPL and Free Software - 1988</li>" +
        	   		  "<li>Usenet - ~1980's and beyond</li>" +
        	   		  "<li>Linux - 1991</li>" +
        	   		  "<li>Apache - 1995</li>" +
        	   		  "<li>Everything else - 1995 and beyond</li>" +
        	   	   "</ul>",
        	   zoom: 18,
        	   point: new google.maps.LatLng(45.123836, -123.113040)
        	   
           },
           {
        	   title: "History of Open APIs",
        	   contents: 
        		   "<ul>" +
        	   		  "<li>EBay - tools for power sellers -2000</li>" +
        	   		  "<li>Amazon - affiliate apis - 2002</li>" +
        	   		  "<li>Salesforce - Enterprise SAAS - 2003</li>" +
        	   		  "<li>Google Maps, Flickr, Yahoo - 2005</li>" +
        	   		  "<li>Facebook, Twitter - social explosion - 2006</li>" +
        	   		  "<li>Everyone else - exponential growth - 2006 and beyond</li>" +
        	   	   "</ul>",
        	   zoom: 18,
        	   point: new google.maps.LatLng(37.37732, -121.92151)
        	   
           },
           {
        	   title: "Characteristics of Open Source and Open APIs",
        	   contents: 
        		   "<h4>Differences</h4>" +
        		   "<ul>" +
	        		   "<li>Ethos, in particular with Free Software</li>" + 
	        		   "<li>Level of open</li>" +
	        	   "</ul>" +
	        	   "<h4>Commonalities</h4>" +
	        	   "<ul>" +
	        		   "<li>Huge reach</li>" +
	        		   "<li>Huge impact</li>" +
	        		   "<li>Extremely low barrier to entry</li>" +
	        		   "<li>Cost of distribution : creative business models required</li>" +
        		   "</ul>",
        	   zoom: 22,
        	   point: new google.maps.LatLng(10.903855, 19.935041)
           },
           {
        	   title: "The Impact of Open",
        	   contents: 
        		   "<ul><li>Open APIs and OSS: offering billions worth of tech to anyone who can code</li>" +
	        		   "<li>Developers make the choice</li>" +
	        		   "<li>Survival of the fittest not best salesman</li>" +
	        		   "<li>Open feeds itself - The more you build, the more can be built</li>" +
        		   "</ul>",
        	   zoom: 15,
        	   point: new google.maps.LatLng(35.0357, -111.0238)
           },
           {
        	   title: "The Impact of Open Source Software",
        	   contents: 
        		   "<ul>" +
	        		   "<li>Hard to quantify</li>" +
	        		   "<li>Data center technology</li>" +
	        		   "<li>Financial industries</li>" +
	        		   "<li>Office software</li>" +
	        		   "<li>Government operations</li>" +
	        		   "<li>Mobile</li>" +
	        		   "<li>Publishing</li>" +
        		   "</ul>",
        	   zoom: 12,
        	   point: new google.maps.LatLng(6.5509, -1.4107)
           },
           {
        	   title: "The Impact of Open Services",
        	   contents: 
        		   "<ul>" +
	        		   "<li>GIS (Google Maps)</li>" +
	        		   "<li>Payments (PayPal, MasterCard, Visa, Stripe)</li>" +
	        		   "<li>E-commerce (majority of EBay listings via API)</li>" +
	        		   "<li>The business of relationships (social)</li>" +
	        		   "<li>Media distribution (twitter)</li>" +
	        		   "<li>Data Center technology (Amazon)</li>" +
	        		   "<li>Enterprise Software (Salesforce)</li>" +
        		   "</ul>",
        	   zoom: 8,
        	   point: new google.maps.LatLng(51.696, -68.722)
           },
           {
        	   title: "MasterCard's Open APIs",
        	   contents: 
        		   "<h4>http://developer.mastercard.com</h4>" +
        		   "<img src='slidedata/openapi-homepage.png' />",
        	   zoom: 17,
        	   point: new google.maps.LatLng(41.02763, -73.71558)
           },
           {
        	   title: "MasterCard's Current Services",
        	   contents: 
        		   "<h4>http://developer.mastercard.com</h4>" +
        		   "Payments, Offers, Locations, MoneySend, and MATCH" +
        		   "<img src='slidedata/openapi-services.png' />",
        	   zoom: 16,
        	   point: new google.maps.LatLng(38.74792, -90.74629)
           },
           {
        	   title: "MasterCard's Future Services",
        	   contents: 
        		   "<ul>" +
        		   		"<li>Fraud</li>" +
        		   		"<li>Analytics</li>" +
        		   		"<li>Advanced Payments, Social Payments, Recurring Payments</li>" +
        		   		"<li>Seperation of Merchant/Developer Relationship</li>" +
        		   "</ul>",
        	   zoom: 20,
        	   point: new google.maps.LatLng(48.825294, 2.198573)
           },
           {
        	   title: "The Server...err...Grid...err...Cloud",
        	   contents: 
        		   "Cloud itself is not new.  What's new is:" +
        		   "<ul>" +
        		   		"<li>Mainstream virtualization</li>" +
        		   		"<li>Open Access</li>" + 
        		   		"<li>Open Cloud APIs</li>" +
        		   	"</ul>" +
        		   	"This leads to:" +
        		   	"<ul>" +
         		   		"<li>Unbelievably low barrier to entry</li>" +
         		   		"<li>A home for OSS software</li>" + 
         		   		"<li>Exciting time for software developers</li>" +
         		   	"</ul>",
        	   zoom: 8,
        	   point: new google.maps.LatLng(74.964, -39.93)
           },
           {
        	   title: "Beyond Open Source and Open Services",
        	   contents: 
        		   "The ideas of Open are spreading beyond software" +
        		   "<ul>" +
        		   		"<li><b>Open Knowledge</b> (Wikipedia, Wikileaks) - disrupting traditional knowledge industry, governments etc</li>" +
        		   		"<li><b>Open Communication</b> - disrupting governments (twitter)</li>" + 
        		   		"<li><b>Creative Commons</b> - opening content works, potential for disruption - I believe there's still more to come here</li>" +
        		   		"<li><b>Open Publishing</b> - huge potential</li>" +
        		   		"<li><b>Open Music</b> - future is still unclear</li>" +
        		   		"<li><b>Open Government</b> - making all government data open.  Tim OReilly big proponent.  Impact can be huge, like the Census Bureau's open map data.</li>" +
        		   	"</ul>",
        	   zoom: 18,
        	   point: new google.maps.LatLng(36.113094, -115.173723)
           },
           {
        	   title: "The Future of Open Source",
        	   contents: 
        		   "Improved technology leading the way<br>" +
        		   "<ul>" +
        		   		"<li>DVCS</li>" +
        		   		"<li>Open Source feeding Open Source</li>" +
        		   		"<li>Patent Wars - Patent Commons</li>" +
        		   		"<li>Repeats of Android, Chrome</li>" +
        		   		"<li>Mobile-Social-Cloud</li>" +
	        	   "</ul>",
        	   zoom: 10,
        	   point: new google.maps.LatLng(28.58707, -80.65274)
           },
           {
        	   title: "The Future of Open Services",
        	   contents: 
	        	   "<ul>" +
        		   		"<li>Technologies like OAuth and OpenID</li>" +
        		   		"<li>Open APIs major building block for apps</li>" +
        		   		"<li>Social APIs a major force</li>" +
        		   		"<li>Growing community - currently in their infancy</li>" +
        		   		"<li>Clearly immature - growth is exponential</li>" +
        		   		"<li>Moving to REST</li>" +
        		   		"<li>More use of formats other than XML > JSon, protobufs, etc</li>" +
        		   		"<li>More tooling</li>" +
        		   		"<li>Formation of an industry around APIs (tool providers, consultancies, etc.)</li>" +
        		   		"<li>More app stores</li>" +
        		   		"<li>More open-open - combining open services, open content licenses, and open source" +
        		   "</ul>",
        	   zoom: 18,
        	   point: new google.maps.LatLng(28.58707, -80.65274)
           },
        ];		


/*


History of Open
Remember getting books from the library with game source code for basic.


Definitions
Open Source
Open API - a service using open standards to make it's technology available to every developer in the world




Different characteristics of OSS and Open APIs:
Ethos, in particular with Free Software
Level of open


Characteristics of Open
Huge reach
Huge impact
Extremely low barrier to entry
Cost of distribution : creative business models required - fine line to walk




The huge impact of Open:
Open APIs and OSS are both about offering billions of dollars worth of technology to everyone on the planet who is capable of writing code.
Developers make the choice, not salesman selling to management. -> Survival of the fittest not best salesman.
Open feeds itself - The more you build, the more can be built.




Places Open Source is impacting:
It's hard to identify the complete impact.  Almost every product built today utilizes some OSS.
Nearly everything, including:
Data center technology
Financial industries
Office software
Government operations
Mobile
Publishing




Places Open APIs are impacting:
GIS
Payments
The business of relationships (social)
Media distribution (twitter)
Data Center technology (Amazon web services)


Future of OSS and Open APIs:
Improved tech leading the way -
OSS: 
DVCS
OSS feeding OSS
Technologies like OAuth, OpenID




Beyond OSS and OpenAPIs:
The ideas of Open are spreading beyond software
Open Knowledge (Wikipedia, Wikileaks) - disrupting traditional knowledge industry, governments etc
Open Communication - disrupting governments (twitter)
Creative Commons - opening content works, potential for disruption - I believe there's still more to come here
Open Publishing - huge potential
Open Music - future is still unclear
Open Government - making all government data open.  Tim OReilly big proponent.  Impact can be huge, like the Census Bureau's open map data.



 * 
 */

