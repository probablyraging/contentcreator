import { Card, Text } from "@nextui-org/react";
import { Tilt } from 'react-tilt';
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
    <Tilt options={{ max: 15, scale: 1 }}>
        <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
                <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain sm:max-w-[32px]" />
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-10 sm:text-[14px] sm:text-center">
                    {content}
                </p>
            </Card.Body>
            <Card.Footer>
                <div className="flex flex-row">
                    <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
                    <div className="flex flex-col ml-4">
                        <Text h4
                            className="font-poppins font-semibold text-[20px] sm:text-[18px] leading-[32px]"
                            css={{ display: 'inline-block', textGradient: "90deg, rgba(14,98,194,1) 0%, rgba(83,155,237,1) 76%, rgba(14,98,194,1) 100%", }}>
                            {name}
                        </Text>
                        <p className="font-poppins font-normal text-[16px] leading-[24px]">
                            {title}
                        </p>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    </Tilt>
);

export default FeedbackCard;