const styles = {
    boxWidth: "xxlup:max-w-[1280px] w-full",

    headingRes: "font-poppins font-semibold text-[48px] xs:text-[40px] leading-[76.8px] xs:leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "px-16 sm:px-6",
    paddingY: "py-16 sm:py-6",
    padding: "px-16 sm:px-6 py-12 sm:py-4",

    marginX: "mx-16 sm:mx-6",
    marginY: "my-16 sm:my-6",
};

export const layout = {
    section: `flex flex-row md:flex-col ${styles.paddingY}`,
    sectionReverse: `flex flex-row md:flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} mr-10 md:mr-0 mt-0 md:mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} ml-10 md:ml-0 mt-0 md:mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;