import { Card, Button, } from "@nextui-org/react";
import styles from "../style";
import { cardbg } from "../assets";

const CallToAction = () => (
    <div>
        <Card
            css={{ px: "$24", py: "$12", mw: "100%", backgroundImage: `url(${cardbg})`, backgroundSize: 'cover' }}
            className="md:p-6 sm:bg-none">
            <Card.Body css={{ py: "$2" }}>
                <div className="flex flex-row sm:flex-col sm:items-center gap-16">
                    <div className="flex-1 flex flex-col">
                        <h2 id="test" className={`${styles.headingRes} sm:leading-10 sm:text-[20px] sm:text-center sm:text-[#3694ff]`}>Join our Discord server today!</h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:text-[14px] sm:text-center font-medium`}>
                            There are already <span className="font-bold">12,000+</span> content creators in our community, and <span className="font-semibold">you're missing out</span>.
                        </p>
                    </div>
                    <div className="m-auto">
                        <Button flat color="primary" size="xl" auto href="#" className="sm:h-12"
                            css={{ color: '#ffffff' }}>
                            Join Now!
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>

);

export default CallToAction;