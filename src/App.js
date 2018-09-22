import React, { Component } from 'react';
import logo from './logo.svg';
import profileImage from './images/zaki.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrap">
    
        <img src={profileImage} alt="Photo of Cthulu" id="pic" className="rounded"/>
    
        <div id="contact-info" className="vcard">
        
            <h1 className="fn">Sheikh Md Zakaria</h1>
        
           
        </div>
                
        
        
        <dl>
            <dd className="clear"></dd>
            
            <dt>Education</dt>
            <dd>
                <h2>Bachelors in Computer Science and Engineering</h2>
                <p><strong>Major:</strong> Computer Science and Engineering
                </p>
            </dd>
            
            <dd className="clear"></dd>
            
            <dt>Skills</dt>
            <dd>
            
            <p><strong>	Application Development: </strong>C#, VB.NET, WPF, MVVM, Prism, Infragistics, ASP.NET MVC 4, DOM, HTML, HTML5, CSS, Ajax, JSON, JQuery, Responsive Web design, PHP, Web API, WCF, XML, Codeigniter, PHP Framework, SEO, Team Foundation Server, Subversion, Crystal report 2013, ReactJs, React developer tools, Simple React Snippets, Visual Studio Code, AngularJs 1, Javascript, ES6, Bootstrap</p>
            <p><strong>		Databases: </strong>MySQL, Oracle 9i, 10g, MSSQL 2016 </p>
            <p><strong>		Web/App Server: </strong>Apache, IIS</p>
            <p><strong>		SDLC: </strong>Agile, Waterfall, TDD</p>
            <p><strong>	Operating System: </strong>Windows XP, Windows 7, Linux RedHat</p>
            <p><strong>	Strong backgrounds</strong> in Algorithms, Data Structures and Object Oriented Programming </p>
            </dd>
            
            <dd className="clear"></dd>
            
            <dt>Experience</dt>
            <dd>
                <h2>Engineer <span>Invesco Canada- Application Run- 2017 -  Current</span></h2>
                <ul>
                    
                </ul>
                
                <h2>Assistant Engineer <span>Power Development Board(BD)- Billing- 2011 - 2016</span></h2>
                <ul>
                    
                </ul> 
                <h2>Senior Software Engineer <span>Softrus Solution- 2009 - 2011</span></h2>
                <ul>
                    
                </ul> 
            </dd>
            <dd className="clear"></dd>
            
            <dt>Proffessional Projects</dt>
            <dd>
                <ul>
                <li>	Phoenix: VB.NET, WPF, MVVM, Prism, XAML, Infragistics, MS SQL Server</li>
                <li>	PPM: VB.NET, Infragistics, Web service, HTML, Jquery, CSS, MS SQL Server</li>
                <li>	Tarmac Outlook Plugin: C# .NET, Winform, MS SQL Server</li>
                <li>	Profitability App: Microsoft SSIS</li>
                <li>	Online new connection: ASP.NET MVC, HTML, CSS, Jquery, Ajax, MS SQL Server</li>
                <li>	E-commerce Website: ASP.NET Webform, HTML, CSS, Javascript, MS SQL Server</li>
                <li>	Fixed Asset Tracker: C#, .NET, Win form, Test Driven Development, Nunit</li>
                </ul>
            </dd>

            <dd className="clear"></dd>
            
            <dt>Personal Projects</dt>
            <dd>
                
                <ul>
                  <li>	Design and Development of Lamar University Professor (Kmakki) Website customizing free css template, HTML and CSS - http://galaxy.cs.lamar.edu/~kmakki/</li>
                  <li>	<a href="http://www.techno-groupbd.com/" target="_blank"> www.techno-groupbd.com</a> : ASP.NET Webform, HTML, CSS</li>
                  <li>	Social Networking Web Application with Codeigniter, HTML, CSS, jQuery and MYSQL </li>
                  <li>	ReactJs: <a href="https://smzakaria.github.io/plural-demo/" target="_blank"> https://smzakaria.github.io/plural-demo/</a></li>
                  <li>	ReactJs: <a href="https://smzakaria.github.io/hellogame/" target="_blank"> https://smzakaria.github.io/hellogame/</a></li>
                  <li>	ReactJs: <a href="https://smzakaria.github.io/githubusers/" target="_blank"> https://smzakaria.github.io/githubusers/</a></li>
                </ul> 
            </dd>
            <dd className="clear"></dd>
            
            <dt>Hobbies</dt>
            <dd>Badminton, Cycling, Cricket</dd>
            <dd className="clear"></dd>
            <dd className="clear"></dd>
        </dl>
        
        <div className="clear"></div>
    
    </div>
    );
  }
}

export default App;
