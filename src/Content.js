import React, { Component } from 'react';
import './Content.css';
class Content extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="figure">
                        <svg class="cloud" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                            <path d="M0 0h48v48h-48z" fill="none" />
                            <path d="M38.71 20.07c-1.36-6.88-7.43-12.07-14.71-12.07-5.78 0-10.79 3.28-13.3 8.07-6.01.65-10.7 5.74-10.7 11.93 0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zm-.71 15.93h-26c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42c1.31-4.61 5.54-8 10.58-8 6.08 0 11 4.92 11 11v1h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
                                fill="#004FA2" />
                            <animateTransform id="animCloud" class="transformation" attributeName="transform" attributeType="XML" from="440" to="-440"
                                dur="5s" repeatCount="indefinite"></animateTransform>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613.52 179.35" onclick="speedUp()">
                            <title>change speed</title>
                            <g data-name="karoseri" fill="#fff" stroke="#004FA2" stroke-miterlimit="15" stroke-width="0.5%">
                                <path d="M.51 138.17c4.83-73.51 5-85 20.5-84.76 127.5 2.26 214.5-117.24 390.5-4.24 67 15 197-6.5 201.5 84.5.57 11.64-35.5 7.07-63.75 7.5-.75-53-85.75-57.5-85.75 2.5-53.25 0-202.5-1.25-225.5 0s-31 1.25-94.5 0c-1.5-57-83.5-57-83.5.56-18 2.25-39.66.36-43.64-.05-9.01-.93-16.25-.09-15.86-6.01z"
                                />
                                <path d="M103.51 51.42c15.72.21 76.06-.59 130.38-3 .62-33.63 0-4.1.62-37.74-37-.01-117.06 36.11-131 40.74zM400.79 50.37c-95.73-1.76-90.41-.59-158.41-2.33-.87-35 0-3.27-.87-38.25 26.76-2.46 62.56-10.87 159.28 40.58z"
                                />
                            </g>
                            <g id="fremre_hjul" data-name="Fremre hjul" fill="#fff" stroke="#004FA2" stroke-width="0.5%" stroke-miterlimit="15" class="wheel2">
                                <circle cx="507.01" cy="142.17" r="36.68" />
                                <circle cx="507.01" cy="142.17" r="30.86" />
                                <circle cx="499.01" cy="132.17" r="10.43" />
                                <circle cx="521.26" cy="142.17" r="10.43" />
                                <circle cx="502.01" cy="155.73" r="10.43" />
                                <animateTransform id="animFW" class="transformation" attributeName="transform" attributeType="XML" type="rotate" from="0 507 142"
                                    to="360 507 142" dur="5s" repeatCount="indefinite">
                                </animateTransform>

                            </g>
                            <g id="bakre_hjul" data-name="Bak hjul" fill="#fff" stroke="#004FA2" stroke-width="0.5%" stroke-miterlimit="15" class="wheel1">
                                <circle cx="101.51" cy="142.17" r="36.68" />
                                <circle cx="101.51" cy="142.17" r="30.86" />
                                <circle cx="91.39" cy="130.81" r="10.43" />
                                <circle cx="113.64" cy="140.81" r="10.43" />
                                <circle cx="94.39" cy="154.38" r="10.43" />
                                <animateTransform id="animRW" class="transformation" attributeName="transform" attributeType="XML" type="rotate" from="0 101 142"
                                    to="360 101 142" dur="5s" repeatCount="indefinite">
                                </animateTransform>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="text">
                    <p id="information">
                        Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed,
                        stood in constant opposition to one another, carried on an uninterrupted, now hidden, now open fight, a fight that
                        each time ended, either in a revolutionary re-constitution of society at large, or in the common ruin of the contending
                        classes. In the earlier epochs of history, we find almost everywhere a complicated arrangement of society into various
                        orders, a manifold gradation of social rank. In ancient Rome we have patricians, knights, plebeians, slaves; in the
                        Middle Ages, feudal lords, vassals, guild-masters, journeymen, apprentices, serfs; in almost all of these classes,
                        again, subordinate gradations. The modern bourgeois society that has sprouted from the ruins of feudal society has
                        not done away with class antagonisms. It has but established new classes, new conditions of oppression, new forms of
                        struggle in place of the old ones. Our epoch, the epoch of the bourgeoisie, possesses, however, this distinctive feature:
                        it has simplified the class antagonisms. Society as a whole is more and more splitting up into two great hostile camps,
                        into two great classes, directly facing each other: Bourgeoisie and Proletariat. From the serfs of the Middle Ages
                        sprang the chartered burghers of the earliest towns. From these burgesses the first elements of the bourgeoisie were
                        developed. The discovery of America, the rounding of the Cape, opened up fresh ground for the rising bourgeoisie. The
                        East-Indian and Chinese markets, the colonisation of America, trade with the colonies, the increase in the means of
                        exchange and in commodities generally, gave to commerce, to navigation, to industry, an impulse never before known,
                        and thereby, to the revolutionary element in the tottering feudal society, a rapid development. The feudal system of
                        industry, under which industrial production was monopolised by closed guilds, now no longer sufficed for the growing
                        wants of the new markets. The manufacturing system took its place. The guild-masters were pushed on one side by the
                        manufacturing middle class; division of labour between the different corporate guilds vanished in the face of division
                        of labour in each single workshop. Meantime the markets kept ever growing, the demand ever rising. Even manufacture
                        no longer sufficed. Thereupon, steam and machinery revolutionised industrial production. The place of manufacture was
                        taken by the giant, Modern Industry, the place of the industrial middle class, by industrial millionaires, the leaders
                        of whole industrial armies, the modern bourgeois. Modern industry has established the world-market, for which the discovery
                        of America paved the way. This market has given an immense development to commerce, to navigation, to communication
                        by land. This development has, in its time, reacted on the extension of industry; and in proportion as industry, commerce,
                        navigation, railways extended, in the same proportion the bourgeoisie developed, increased its capital, and pushed
                        into the background every class handed down from the Middle Ages.
                        </p>
                </div>
            </div>
        );
    }
}
export default Content;