import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";

const Timeline = () => {
    return (
        <>
            <div className="text-center">
                <p className="text-[var(--red)] text-xs font-extrabold uppercase">
                    Timeline
                </p>
                <h1 className="sm:text-5xl text-4xl font-bold capitalize">
                    How it works
                </h1>
            </div>
            <VerticalTimeline lineColor="var(--text)">
                <VerticalTimelineElement
                    contentStyle={{ background: "var(--red)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  var(--red)" }}
                    iconStyle={{ background: "var(--red)", color: "#fff" }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Selecting the Car</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: "var(--red)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  var(--red)" }}
                    iconStyle={{ background: "var(--red)", color: "#fff" }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Test Drive</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: "var(--red)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  var(--red)" }}
                    iconStyle={{ background: "var(--red)", color: "#fff" }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Payment and Paperwork
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: "var(--red)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  var(--red)" }}
                    iconStyle={{ background: "var(--red)", color: "#fff" }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Ready to Rev</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
};

export default Timeline;
