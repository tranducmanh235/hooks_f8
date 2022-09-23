import Paragraph from "./Paragraph";

// Context: don gian hoa viec truyen du lieu tu component cha -> con
// CompA => CompB => CompC

// Theme: Dark / Light

/**
 * 1. create context
 * 2. provider
 * 3. consumer
 */

function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    );
}

export default Content;
