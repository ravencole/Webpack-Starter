import React from 'react';
import Scroll from'react-scroll';
import Nav from './components/Nav';

const Link = Scroll.Link,
      Element = Scroll.Element;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainHeading: true,
            navDark: false,
            activeService: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.servicesDisplaySwitch = this.servicesDisplaySwitch.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if (document.body.scrollTop > 614) {
            return this.setState({navDark: true});
        }

        this.setState({navDark: false});

        if (document.body.scrollTop > 390) {
            return this.setState({mainHeading: false});
        }
        this.setState({mainHeading: true});
    }

    servicesDisplaySwitch(serviceNum) {
        this.setState({ activeService: serviceNum });
    }

    render() {
        const styles = {
            show: {
                display: 'initial'
            },
            hide: {
                display: 'none'
            }
        }

        const services = [ 
            {
                name: 'Merger Integration',
                icon: 'add-3.svg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum ipsum id odio laoreet, rutrum gravida felis tempor. Sed aliquam porta ullamcorper. Nullam rutrum auctor efficitur. In in neque felis. Pellentesque fermentum efficitur molestie. Morbi vitae finibus sem, nec pretium mauris. Cras in iaculis dolor. Donec ut leo purus. Maecenas facilisis in nibh dignissim ultricies. Praesent et elit nec sem suscipit fermentum id ac elit. Integer dapibus ante arcu, at commodo dui bibendum sed. Proin venenatis placerat erat vitae iaculis. Fusce ultrices bibendum justo vitae consequat. Donec risus nunc, consequat id turpis sed, bibendum eleifend libero. Curabitur vehicula tristique diam, sed ornare tortor tempor ac. Maecenas vitae placerat nisi, id suscipit massa.'
            }, 
            {
                name: 'Technology',
                icon: 'cloud-computing-2.svg',
                text: 'Curabitur facilisis elit nunc, id tempus purus pretium laoreet. Nam ut lorem id justo venenatis auctor. Quisque et pellentesque ipsum, elementum condimentum ex. Nam ut urna interdum ipsum viverra molestie. Pellentesque a nibh ut massa finibus mattis in et risus. Etiam sagittis sit amet purus ut ornare. Quisque sodales eleifend orci in malesuada. Suspendisse potenti. Curabitur vitae magna porttitor, porttitor nibh ac, interdum nibh. Vivamus dignissim eget lorem in lobortis. Nunc consequat eleifend purus id feugiat. Nunc in enim mattis magna tincidunt cursus. Phasellus at feugiat velit, porttitor convallis ante. Vestibulum leo lacus, aliquet sed turpis sed, euismod ullamcorper metus. Vestibulum at pellentesque mi, ac lacinia elit. Vestibulum in dolor et tortor placerat vehicula.'
            }, 
            {
                name: 'Model Change',
                icon: 'paper-plane-1.svg',
                text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel sollicitudin sapien. Suspendisse eget dolor mauris. Vivamus eu diam finibus, varius mi in, lobortis enim. Ut libero justo, sollicitudin et diam nec, pulvinar faucibus nibh. Nullam ullamcorper luctus condimentum. Nunc magna mi, porta non ex quis, malesuada luctus ipsum. Integer ut faucibus enim. Sed convallis, urna porta auctor pretium, magna nisl pellentesque sem, eu posuere leo enim nec risus. Maecenas aliquet tellus a erat mollis, id semper tortor feugiat. Ut in fringilla felis. Mauris et dolor semper quam elementum aliquet a nec mauris. Etiam a diam id magna venenatis aliquet quis elementum est. Mauris sit amet mattis magna.'
            }, 
            {
                name: 'IT Optimization',
                icon: 'battery.svg',
                text: 'Curabitur imperdiet luctus viverra. Curabitur leo risus, lobortis non mattis eget, scelerisque vel nisi. Fusce molestie eu mi vitae bibendum. Sed tempus tortor aliquet lobortis cursus. Donec tempor ipsum a turpis suscipit, sit amet pulvinar odio egestas. Suspendisse ac tempor ipsum, sed faucibus quam. Duis eget metus fringilla nunc cursus maximus ut gravida massa. Vestibulum eget aliquet quam.'
            }, 
            {
                name: 'Sustainability',
                icon: 'worldwide.svg',
                text: 'Aenean ornare turpis in leo volutpat varius. Vivamus dui velit, luctus a auctor a, efficitur in dui. Morbi consequat aliquam maximus. Morbi porta ipsum non ante tincidunt maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac felis eu augue tempor luctus. Cras porta felis ut orci laoreet varius nec eu justo. Nam eu ligula vulputate, lacinia ex a, aliquet magna. Nam non augue vel metus sollicitudin pellentesque lacinia sed mi. In nec metus magna. Ut ac bibendum purus. Ut nulla magna, consectetur nec luctus sed, finibus hendrerit nisi. Morbi id volutpat leo, ut interdum massa. Fusce et finibus mauris, sed molestie tellus. Donec volutpat sapien sed dolor commodo pretium. Pellentesque pharetra neque arcu.'
            }, 
            {
                name: 'Acquisitions',
                icon: 'agenda.svg',
                text: 'Donec tempor ipsum a turpis suscipit, sit amet pulvinar odio egestas. Suspendisse ac tempor ipsum, sed faucibus quam. Duis eget metus fringilla nunc cursus maximus ut gravida massa. Vestibulum eget aliquet quam.  lacinia sed mi. In nec metus magna. Ut ac bibendum purus. Ut nulla magna, consectetur nec luctus sed, finibus hendrerit nisi. Morbi id volut.'
            } 
        ];

        const renderServicesDisplay = () => {
            const currentService = services[this.state.activeService];

            return (
                <div className="services--display">
                    <div className="services--display__heading">
                        { currentService.name }
                    </div>
                    <div className="services--display__body">
                        <div className="services--display__icon">
                            <img src={`/images/${currentService.icon}`} height="90px" />
                        </div>
                        <div className="services--display__text">
                            { currentService.text }
                        </div>
                    </div>
                </div>
            );
        }

        const renderServicesSidebarButtons = () => {
            return services.map((service, i) => {
                return (
                    <div 
                        key={`servicessidebarbtn${i}`} 
                        value={ this.state.activeService === i ? '1' : '0' } 
                        onClick={() => this.servicesDisplaySwitch(i)} 
                        className="services--sidebar__btn"
                    >
                        { service.name }
                    </div>
                );
            });
        }

        return (
            <div className="container">
                <Nav navDark={this.state.navDark} Link={Link}/>
                <div className="landing--container">
                    <h1 style={ this.state.mainHeading ? styles.show : styles.hide }>Discover Consulting Group</h1>
                </div>
                <Element name="home" className="landing--buffer"></Element>
                <div className="testimonial--container">
                    <div className="testimonial--quote">
                        <p>"Discover Consulting Group provided our complex Payroll implementation project with creative leadership and guidance to get us through the finish line, and helped us set the foundation to achieve our vision for Shared Services."</p>
                        <p>- Executive Director of Shared Services for a Fortune 500 Company in the Construction Industry</p>
                    </div>
                </div>
                <Element name="services" className="services--container">
                    <div className="services--heading">Services</div>
                    <div className="services--body">
                        { renderServicesDisplay() }
                        <div className="services--sidebar">
                            { renderServicesSidebarButtons() }
                        </div>
                    </div>
                </Element>
                <Element name="leadership" className="leadership--heading">
                    <h2>Thought Leadership</h2>
                </Element>
                <div className="leadership--container">
                    <div className="blogs--container">
                        <div className="leadership--item">
                            <div className="leadership--item__title">HR Technology Innovations Survey</div>
                            <div className="leadership--item__time">1:18 pm | Uncategorized | 0 Comments</div>
                            <div className="leadership--item__body">The objective of this online survey is to gather information about how companies perceive new technology innovations are being used…</div>
                            <div className="leadership--item__continue">Continue Reading...</div>
                        </div>
                    </div>
                    <div className="surverys--container"></div>
                </div>
                <Element name="about" className="about--container">
                    <h1 className="about--container__title">Who We Are</h1>
                    <div className="about--container__body">
                        <div className="about--container__subtitle">
                                 Discover Consulting Group was established with the goal of helping solve our clients’ most challenging operational and technical issues. Our team of professionals has successfully delivered strategy, operations and technology projects for large multinational organizations spanning the financial services, life sciences, healthcare, manufacturing, retail and telecommunications industries and federal, state & local government and higher education institutions. Our experience spans a broad spectrum of specialties, including management, finance, human resources and information technology.
                        </div>
                        <div className="about--container__name">
                            <h1>Manny Ramirez</h1>
                        </div>
                        <div className="personal--container">
                            <div className="headshot--container">
                                <img src="/images/headshot.jpg" height="300px" />
                            </div>
                            <div className="resume--container">
                                <p>Emmanuel (Manny) is the Managing Principal of Discover Consulting Group. Manny previously held leadership positions at KPMG LLP, BearingPoint, Deloitte Consulting and IBM. He has assisted many organizations in solving operational deficiencies by developing and executing strategies to transform the way services are delivered. He has over twenty-five years of business transformation experience and has restructured back-office operations and implemented shared service centers for global organizations. In addition, Manny has over fifteen years of experience implementing large scale ERP (SAP, PeopleSoft and Oracle) and web-based enabling technologies.</p>
                                <p>Manny has an ability to quickly understand client business problems and uses his knowledge of HR, Finance and IT to provide thoughtful and innovative solutions. He brings a creative and honest approach to problem solving by focusing on unexpected-value to his clients. His specific industry experiences include chemicals, consumer products, life sciences, retail and transportation.</p>
                                <p>Manny has a Bachelor’s Degree in Computer Science from the University of North Dakota. He resides in Newtown Square, Pennsylavnia with his wife, Anne Louise and has four children.</p>
                            </div> 
                        </div>
                    </div>
                </Element>
                <Element name="contact" className="footer">
                    <div className="footer--title">
                        Contact Us
                    </div>
                    <div className="footer--body">
                        <div className="footer--email">
                            <div className="footer--item__icon footer--email__icon">
                                <img src="/images/file.svg" height="80px" />
                            </div>
                            <div className="footer--item__title">
                                <div>info@discovercgllc.com</div>
                            </div>
                        </div>
                        <div className="footer--tel">
                            <div className="footer--item__icon">
                                <img src="/images/smartphone-6.svg" height="80px" />
                            </div>
                            <div className="footer--item__title">
                                <div>(610) 772-3148</div>
                            </div>
                        </div>
                        <div className="footer--address">
                            <div className="footer--item__icon">
                                <img src="/images/map-location.svg" height="80px" />
                            </div>
                            <div className="footer--item__title__address">
                                <div>42 Thornbird Way</div>
                                <div>Newtown Square, Pennsylvania</div> 
                                <div>United States 19073</div>
                            </div>
                        </div>
                        <div className="footer--linkedin">
                            <div className="footer--item__icon">
                                <img src="/images/linkedin.svg" height="80px" />
                            </div>
                            <div className="footer--item__title">
                                <div>linkedin</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--copyright">Copyright &copy; 2016, Discover Consulting Group LLC. All rights reserved.</div>
                </Element>
            </div>
        );
    }
}

export default App;











