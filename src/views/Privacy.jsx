import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Breadcrumbs, Typography } from '@mui/material';
import { Loader } from "../components";

const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));
const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Footer = lazy(() => import('../components/partials/Footer'));

const Privacy = ({ darkMode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <ContentWrapper>
                <Helmet>
                    <title>Privacy Policy - CreatorDiscord</title>
                    <meta name="description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="keywords" content="content creator, community discord, a content creator, as a content creator, be a content creator, community creators, content creator and influencer, content creator community, content creator discord, content creator discord server, discord server for content creators, content creator discord server, discord server for small content creators, discord server, content creators, discord, content creator" />
                    <meta name="twitter:title" content="CreatorDiscord - A Discord server for content creators" />
                    <meta name="twitter:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="twitter:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                    <meta property="og:title" content="CreatorDiscord - A Discord server for content creators" />
                    <meta property="og:url" content="https://creatordiscord.xyz/" />
                    <meta property="og:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta property="og:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                </Helmet>

                <BgGradientsAlt />

                <div className={`flex flex-row justify-between items-center mt-7 mb-7 px-16 sm:px-6 xxlup:px-0 ss:justify-center`}>
                    <Breadcrumbs className='ss:hidden'>
                        <Link to="/" className="flex items-center">
                            <i className="bi bi-house-fill mr-2"></i>
                            <Typography variant="body2">CreatorDiscord</Typography>
                        </Link>
                        <Link to='/extguide' className={`flex items-center`}>
                            <Typography variant="body2">Privacy Policy</Typography>
                        </Link>
                    </Breadcrumbs>
                </div>

                <section id="content" className={`post-body relative flex flex-col sm:flex-col p-12 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                    <p>Last Updated: 28/12/22</p>
                    <h3>Interpretation and Definitions</h3>
                    <p>
                        This Privacy Policy describes Our policies and procedures on the
                        collection, use and
                        disclosure of Your
                        information when You use the Service and tells You about Your
                        privacy rights and how the
                        law protects You.
                    </p>
                    <p>
                        We use Your Personal data to provide and improve the Service. By
                        using the Service, You
                        agree to the
                        collection and use of information in accordance with this Privacy Policy.
                    </p>
                    <h4>Interpretation</h4>
                    <p>
                        The words of which the initial letter is capitalized have meanings
                        defined under the
                        following conditions.
                        The following definitions shall have the same meaning regardless of
                        whether they appear
                        in singular or in
                        plural.
                    </p>
                    <h4>Definitions</h4>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li>
                            <strong>Account</strong> means a unique account created for
                            You to access our
                            Service or parts of our
                            Service.
                        </li>
                        <li>
                            <strong>Company</strong> (referred to as either &quot;the
                            Company&quot;,
                            &quot;We&quot;,
                            &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers
                            to CreatorDiscord.
                        </li>
                        <li>
                            <strong>Cookies</strong> are small files that are placed on
                            Your computer, mobile
                            device or any other
                            device by a website, containing the details of Your browsing
                            history on that
                            website among its many
                            uses.
                        </li>
                        <li>
                            <strong>Device</strong> means any device that can access the
                            Service such as a
                            computer, a cellphone
                            or a digital tablet.
                        </li>
                        <li>
                            <strong>Personal Data</strong> is any information that
                            relates to an identified
                            or identifiable
                            individual.
                        </li>
                        <li>
                            <strong>Service</strong> refers to the Website.
                        </li>
                        <li>
                            <strong>Service Provider</strong> means any natural or legal
                            person who processes
                            the data on behalf
                            of the Company. It refers to third-party companies or
                            individuals employed by
                            the Company to
                            facilitate the Service, to provide the Service on behalf of
                            the Company, to
                            perform services related
                            to the Service or to assist the Company in analyzing how the
                            Service is used.
                        </li>
                        <li>
                            <strong>Usage Data</strong> refers to data collected
                            automatically, either
                            generated by the use of
                            the Service or from the Service infrastructure itself (for
                            example, the duration
                            of a page visit).
                        </li>
                        <li>
                            <strong>Website</strong> refers to CreatorDiscord, accessible
                            from <a href="https://www.creatordiscord.xyz" rel="external nofollow noopener" target="_blank">https://www.creatordiscord.xyz</a>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using
                                the Service, or the
                                company, or other
                                legal entity on behalf of which such individual is accessing
                                or using the
                                Service, as applicable.
                            </p>
                        </li>
                    </ul>
                    <h3>Collecting and Using Your Personal Data</h3>
                    <h4>Personal Data</h4>
                    <p>We do not store Your Personal Data. Some of the services used on this
                        Website use authentication methods that may allow us access to Your
                        Personal Data, we try our best to not access such data when we don't
                        have to.
                    </p>
                    <h4>Authentication Methods</h4>
                    <p>While using this Website, you may be required to authenticate through
                        third party services. When authenticating with these services we may
                        collect Your:
                    </p>
                    <ul>
                        <li>
                            <strong>Access Tokens</strong> enables applications to use
                            incremental authorization to request access to additional scopes
                            in context.
                        </li>
                        <li>
                            <strong>Refresh Tokens</strong> allows our Service to obtain new
                            access tokens when your current access token expires.
                        </li>
                    </ul>
                    <h4>Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service.</p>
                    <p>Usage Data may include information such as Your Device's Internet
                        Protocol address (e.g.
                        IP address), browser
                        type, browser version, the pages of our Service that You visit, the
                        time and date of
                        Your visit, the time
                        spent on those pages, unique device identifiers and other diagnostic
                        data.
                    </p>
                    <p>When You access the Service by or through a mobile device, We may
                        collect certain
                        information automatically,
                        including, but not limited to, the type of mobile device You use,
                        Your mobile device
                        unique ID, the IP
                        address of Your mobile device, Your mobile operating system, the
                        type of mobile Internet
                        browser You use,
                        unique device identifiers and other diagnostic data.
                    </p>
                    <p>We may also collect information that Your browser sends whenever You
                        visit our Service or
                        when You access the
                        Service by or through a mobile device.
                    </p>
                    <h3>Tracking Technologies and Cookies</h3>
                    <p>We use Cookies and similar tracking technologies to track the
                        activity on Our Service and
                        store certain
                        information. Tracking technologies used are beacons, tags, and
                        scripts to collect and
                        track information and
                        to improve and analyze Our Service. The technologies We use may
                        include:
                    </p>
                    <ul>
                        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small
                            file placed on Your
                            Device. You can
                            instruct Your browser to refuse all Cookies or to indicate when
                            a Cookie is being
                            sent. However, if You
                            do not accept Cookies, You may not be able to use some parts of
                            our Service. Unless
                            you have adjusted
                            Your browser setting so that it will refuse Cookies, our Service
                            may use Cookies.
                        </li>
                        <li><strong>Flash Cookies.</strong> Certain features of our Service
                            may use local stored
                            objects (or Flash
                            Cookies) to collect and store information about Your preferences
                            or Your activity on
                            our Service. Flash
                            Cookies are not managed by the same browser settings as those
                            used for Browser
                            Cookies. For more
                            information on how You can delete Flash Cookies, please read
                            &quot;Where can I
                            change the settings for
                            disabling, or deleting local shared objects?&quot; available at
                            <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_" rel="external nofollow noopener" target="_blank">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a>
                        </li>
                        <li><strong>Web Beacons.</strong> Certain sections of our Service
                            and our emails may
                            contain small
                            electronic files known as web beacons (also referred to as clear
                            gifs, pixel tags,
                            and single-pixel
                            gifs) that permit the Company, for example, to count users who
                            have visited those
                            pages or opened an
                            email and for other related website statistics (for example,
                            recording the
                            popularity of a certain
                            section and verifying system and server integrity).
                        </li>
                    </ul>
                    <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies.
                        Persistent Cookies
                        remain on Your
                        personal computer or mobile device when You go offline, while
                        Session Cookies are
                        deleted as soon as You
                        close Your web browser. Learn more about cookies on the <a href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking" target="_blank">Privacy Policies website</a> article.
                    </p>
                    <p>We use both Session and Persistent Cookies for the purposes set out
                        below:
                    </p>
                    <ul>
                        <li>
                            <strong>Necessary / Essential Cookies</strong><br />
                            Type: Session Cookies<br />
                            Administered by: Us<br />
                            <p>Purpose: These Cookies are essential to provide You with
                                services available
                                through the Website and
                                to enable You to use some of its features. They help to
                                authenticate users and
                                prevent fraudulent
                                use of user accounts. Without these Cookies, the services
                                that You have asked
                                for cannot be
                                provided, and We only use these Cookies to provide You with
                                those services.
                            </p>
                        </li>
                        <li>
                            <strong>Cookies Policy / Notice Acceptance Cookies</strong><br />
                            Type: Persistent Cookies<br />
                            Administered by: Us<br />
                            <p>Purpose: These Cookies identify if users have accepted the
                                use of cookies on the
                                Website.
                            </p>
                        </li>
                        <li>
                            <strong>Functionality Cookies</strong><br />
                            Type: Persistent Cookies<br />
                            Administered by: Us<br />
                            <p>Purpose: These Cookies allow us to remember choices You make
                                when You use the
                                Website, such as
                                remembering your login details or language preference. The
                                purpose of these
                                Cookies is to provide
                                You with a more personal experience and to avoid You having
                                to re-enter your
                                preferences every time
                                You use the Website.
                            </p>
                        </li>
                    </ul>
                    <p>For more information about the cookies we use and your choices
                        regarding cookies, please
                        visit our Cookies
                        Policy or the Cookies section of our Privacy Policy.
                    </p>
                    <h4>Retention of Your Data</h4>
                    <p>The Company will retain Your Data only for as long as is necessary
                        for the
                        purposes set out in this
                        Privacy Policy. We will retain and use Your Data to the extent
                        necessary to
                        comply with our legal
                        obligations (for example, if we are required to retain your data to
                        comply with
                        applicable laws), resolve
                        disputes, and enforce our legal agreements and policies.
                    </p>
                    <h3>Disclosure of Your Data</h3>
                    <h4>Law enforcement</h4>
                    <p>Under certain circumstances, the Company may be required to disclose
                        Your Data
                        if required to do so
                        by law or in response to valid requests by public authorities (e.g.
                        a court or a
                        government agency).
                    </p>
                    <h4>Other legal requirements</h4>
                    <p>The Company may disclose Your Data in the good faith belief that such action is necessary to:</p>
                    <ul>
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Company</li>
                        <li>Prevent or investigate possible wrongdoing in connection with
                            the Service
                        </li>
                        <li>Protect the personal safety of Users of the Service or the
                            public
                        </li>
                        <li>Protect against legal liability</li>
                    </ul>
                    <h4>Security of Your Data</h4>
                    <p>The security of Your Data is important to Us, but remember that no
                        method of
                        transmission over the
                        Internet, or method of electronic storage is 100% secure. While We
                        strive to use
                        commercially acceptable
                        means to protect Your Data, We cannot guarantee its absolute
                        security.
                    </p>
                    <h3>Children's Privacy</h3>
                    <p>Our Service does not address anyone under the age of 13. We do not
                        knowingly collect
                        personally identifiable
                        information from anyone under the age of 13. If You are a parent or
                        guardian and You are
                        aware that Your
                        child has provided Us with Personal Data, please contact Us. If We
                        become aware that We
                        have collected
                        Personal Data from anyone under the age of 13 without verification
                        of parental consent,
                        We take steps to
                        remove that information from Our servers.
                    </p>
                    <p>If We need to rely on consent as a legal basis for processing Your
                        information and Your
                        country requires
                        consent from a parent, We may require Your parent's consent before
                        We collect and use
                        that information.
                    </p>
                    <h3>Links to Other Websites</h3>
                    <p>Our Service may contain links to other websites that are not operated
                        by Us. If You click
                        on a third party
                        link, You will be directed to that third party's site. We strongly
                        advise You to review
                        the Privacy Policy
                        of every site You visit.
                    </p>
                    <p>We have no control over and assume no responsibility for the content,
                        privacy policies or
                        practices of any
                        third party sites or services.
                    </p>
                    <h3>Changes to this Privacy Policy</h3>
                    <p>We may update Our Privacy Policy from time to time. We will notify
                        You of any changes by
                        posting the new
                        Privacy Policy on this page.
                    </p>
                    <p>We will let You know via email and/or a prominent notice on Our
                        Service, prior to the
                        change becoming
                        effective and update the &quot;Last updated&quot; date at the top of
                        this Privacy
                        Policy.
                    </p>
                    <p>You are advised to review this Privacy Policy periodically for any
                        changes. Changes to
                        this Privacy Policy
                        are effective when they are posted on this page.
                    </p>
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, You can contact
                        us by email at admin@creatordiscord.xyz
                    </p>
                </section>

                <Footer />
            </ContentWrapper>
        </Suspense>
    );
};

export default Privacy;