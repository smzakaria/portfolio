import React, { Component } from 'react';
import profileImage from './images/zaki.jpg';
import './App.css';


class App extends Component {
  componentDidMount(){
    document.title = "Zakaria's Portfolio";
  };
  render() {
    return (
      <div id="page-wrap">
        <img src={profileImage} alt="Photo of Cthulu" height="150" width="150" id="pic" className="rounded"/>
        <div id="contact-info" className="vcard">
            <h1 className="fn">Sheikh Md Zakaria</h1>
        </div>
        <div id="objective">
            <p>
              <strong>Profile Snapshot:</strong>
            <ul>
              <li>Dedicated Software Developer with extensive experience in application development, database management, and software engineering.</li>
              <li>Over 12 years of experience, including 7 years of Canadian experience, in developing and supporting Full Stack .Net based web applications.</li>
              <li>Proficient in a wide range of technologies, including C#, ASP.Net MVC, REST API, Microservices, Angular, ReactJS, VueJS, HTML5, Bootstrap CSS, ASP.Net, and jQuery.</li>
              <li>Skilled in all phases of the Software Development Life Cycle (SDLC), from requirement analysis to design, development, implementation, delivery, and troubleshooting.</li>
              <li>Hands-on experience in designing and developing user interfaces for web applications.</li>
              <li>Actively facilitated backend web development and built REST Services using Asp.net Web API and .Net Core in C#.</li>
              <li>Working knowledge of Microsoft SQL Server for handling application data.</li>
              <li>Familiar with Microsoft Azure cloud computing platform.</li>
              <li>Experienced in L2, L3 production support, monitoring, and handling technical incidents.</li>
              <li>Proven track record of delivering innovative solutions and contributing to the success of renowned companies in the pharmaceutical, legal, financial, and technology sectors.</li>
              <li>Experience in the Financial, Legal, and Healthcare domains.</li>
              <li>Microsoft Certified Solutions Associate and Microsoft Certified Solutions Developer.</li>
              <li>Proficient in Agile methodologies, including participation in daily stand-up calls, retrospectives, and planning sessions.</li>
          </ul>

    
            </p>
        </div>     
        <dl>
            
            <dd className="clear"></dd>
            <dt>Skills</dt>
            <dd>
              <p><strong> Application Development: </strong>C#, ASP.NET Web Forms, ASP.NET MVC 4, VB.NET, Angular 8, TypeScript, HTML5, CSS, Ajax, JSON, JQuery, Responsive Web design, PHP, Web API, WCF, XML, Codeigniter, PHP Framework, SEO, Team Foundation Server, Subversion, Crystal report 2013, ReactJs, React developer tools, Simple React Snippets, Visual Studio Code, Javascript, ES6, Bootstrap</p>
              <p><strong>   Databases: </strong>MSSQL 2016, MySQL, Oracle 9i 
              <strong>    Web/App Server: </strong>Apache, IIS
              <strong>    SDLC: </strong>Agile, Kanban, Waterfall, TDD
              <strong>  Operating System: </strong>Windows XP, Windows 10
              <strong>  Strong backgrounds</strong> in Algorithms, Data Structures and Object Oriented Programming </p>
            </dd>
            <dd className="clear"></dd>
            <dt>Experience</dt>
            <dd>
              <ul>
                <h2>Applications Developer <span>Cencora 2022 -  Present</span></h2>
                <strong>Technologies Used:</strong> VueJs, ReactJs, JQuery, Telerik Kendo UI, HTML5, CSS, 
                JavaScript, Asp.net core, WebAPI (C#), EF Core 6, SQL Server Database, Asp.Net, .Net Framework 8.0 
              </ul>
              <ul>
                <h2>Software Developer <span>RBRO Solutions Inc Canada- Dev Team- 2019 -  2022</span></h2>
                <strong>Technologies Used:</strong> Angular 8, HTML5, CSS, JavaScript, Asp.net, WebAPI(C#), Microservices, EF 6, 
                SQL Server Database, Asp.Net, .Net Framework, Speckflow
              </ul>
              <ul>
                <h2>Engineer <span>Invesco Canada- Application Run- 2017 -  2019</span></h2>
                <strong>Technologies Used:</strong> VB.NET, ASP.NET (ASPX), .NET Framework, MS SQL Server, 
                Infragistics, Web Services, HTML5, CSS3, jQuery, AngularJS, MVVM
              </ul>
              <ul>
                <h2>Assistant Engineer <span>Power Development Board(BD)- Billing- 2011 - 2016</span></h2>
                <strong>Technologies Used:</strong> Asp.Net (aspx), Oracle, Asp.Net Web API, SQL Server Database, .Net Framework
              </ul> 
                
            </dd>
            <dd className="clear"></dd>
            <dt>Education</dt>
            <dd>
                <h2>Bachelors in Computer Science and Engineering</h2>
            </dd>
            <dd className="clear"></dd>
            <dt>Proffessional Projects</dt>
            <dd>
                <ul>

                    <li>
                    <strong>EasyID:</strong> Microsoft office plugin handles word’s Save and Close functionality to insert customized tag using iManage DMS metadata, in the document and saving to iManage DMS
                    <strong> Tools Used: </strong>  C#.NET, iManage SDK, Json
                    </li>
                    <li>
                    <strong>EasyImport:</strong>  Import file(s) into iManage DMS using windows context menu
                    <strong> Tools Used: </strong>  C#.NET, REST Api, iManage SDK
                    </li>
                    <li>
                    <strong>Link2DMS:</strong>  It’s a tool to handle Saving/opening files in different application such as notepad, ms word, notepad++, IE etc by overriding windows default open/save file dialog box and presenting iManage file picker dialog box to the user. So that user can directly open/save any file from/to iManage DMS
                    <strong> Tools Used: </strong>  C#.NET, REST Api, iManage SDK
                    </li>
                    <li>
                    <strong>Nucleus Framework:</strong>  Single website used to configure server settings for multiple standalone desktop application on client machine
                    <strong> Tools Used: </strong>  C#.NET, REST Api, iManage SDK, Angular 8, Bootstrap, Html3, CSS, MS SQL Server
                    </li>
                    <li>
                        <strong>Phoenix:</strong> TA Data maintenance application to centralize all territory management 
                        to a single source and process monthly commissions for the trades placed by the reps. 
                        
                        <strong>Tools Used: </strong> VB.NET, WPF, MVVM, Prism, XAML, Infragistics, MS SQL Server
                        
                    </li>
                    <li>  
                        
                        <strong>PPM:
                        </strong>
                         Private placement offerings used for sale of Securities directly to an accredited 
                         investor rather than through public offerings.
                        
                        <strong> Tools Used : </strong>
                        VB.NET, Infragistics, Web service, HTML, Jquery, CSS, MS SQL Server
                       

</li>
<li>  
                        
                        <strong> Tarmac Outlook Plugin: 
                        </strong>
                       Outlook plugin used by sales employee in 
                        creating email which pulls predefined templates of Funds and Disclosures 
                        for these funds and when sent it integrates this email as an individual  task in Salesforce. 
                        <strong>Tools Used : 
                        </strong> C# .NET, Winform, MS SQL Server
                        
                    
                        

</li>
<li>  <strong>Online new connection:
</strong> ASP.NET MVC, HTML, CSS, Jquery, Ajax, MS SQL Server
</li>
<li>  <strong>E-commerce Website:
</strong> ASP.NET Webform, HTML, CSS, Javascript, MS SQL Server
</li>
<li>
<strong>Fixed Asset Tracker: 
</strong>C#, .NET, Win form, Test Driven Development, Nunit
</li>



               
                </ul>
            </dd>

            <dd className="clear"></dd>
            <dt>Hobbies</dt>
            <dd>Badminton, Cycling, Cricket</dd>
            <dd className="clear"></dd>
            <dd className="clear"></dd>
        </dl>
        <div className="clear"></div>
        <h1 className="fn"></h1>
    </div>
    );
  }
}

export default App;