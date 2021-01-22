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
                Software Developer with 5 years experience in web application development, worked with frontend (Angular 8) and backend development. Experienced in developing web and desktop application starting
                from scratch. Participated in all phases of software development. Efficient and comfortable to work with newer tools and technologies. Implementing new features, maintaining existing code, and refactoring existing code across a breadth of products
            </p>
        </div>     
        <dl>
            <dd className="clear"></dd>
            <dt>Education</dt>
            <dd>
                <h2>Bachelors in Computer Science and Engineering</h2>
            </dd>
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
                <h2>Software Developer <span>RBRO Solutions Inc Canada- Dev Team- 2019 -  Present</span></h2>
                </ul>
                <ul>
                <h2>Engineer <span>Invesco Canada- Application Run- 2017 -  2019</span></h2>
                </ul>
                <ul>
                <h2>Assistant Engineer <span>Power Development Board(BD)- Billing- 2011 - 2016</span></h2>
                </ul> 
                
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
            <dt>Personal Projects</dt>
            <dd>
                <ul>
                  <li>  Design and Development of Lamar University Professor (Kmakki) Website customizing free css template, HTML and CSS - http://galaxy.cs.lamar.edu/~kmakki/</li>
                  <li>  <a href="http://www.techno-groupbd.com/" target="_blank"> www.techno-groupbd.com</a> : ASP.NET Webform, HTML, CSS</li>
                  <li>  Social Networking Web Application with Codeigniter, HTML, CSS, jQuery and MYSQL </li>
                  <li>  ReactJs: <a href="https://smzakaria.github.io/plural-demo/" target="_blank"> https://smzakaria.github.io/plural-demo/</a></li>
                  <li>  ReactJs: <a href="https://smzakaria.github.io/hellogame/" target="_blank"> https://smzakaria.github.io/hellogame/</a></li>
                  <li>  ReactJs: <a href="https://smzakaria.github.io/githubusers/" target="_blank"> https://smzakaria.github.io/githubusers/</a></li>
                  <li>  AngularJs 1.x: <a href="https://plnkr.co/edit/ftKK6n5AzNU9kW32zEG7?p=preview" target="_blank"> Angular Demo(plnkr)</a></li>
                  <li>  AngularJs 1.x: <a href="https://gnomic-priorities.000webhostapp.com/#/user/angular" target="_blank"> Angular Demo(github users)</a></li>
                  
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