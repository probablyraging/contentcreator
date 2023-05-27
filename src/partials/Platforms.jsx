import { platforms } from "../constants";
import styles from "../style";

const Platforms = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {platforms.map((platform) => (
                <div key={platform.id} className={`flex-1 ${styles.flexCenter} min-w-[192px] sm:min-w-[0] m-5`}>
                    <img id={platform.id} src={platform.logo} alt={platform.id} className="w-[52px] ss:w-[32px] object-contain" />
                </div>
            ))}
        </div>
    </section>
);

export default Platforms;