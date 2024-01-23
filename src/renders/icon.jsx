import SvgIcon from '@mui/material/SvgIcon';

export function CarouselPrevIcon(props) {
    return (
        <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(16 16) rotate(180)" fill="#fff" />
        </SvgIcon>
    );
}

export function CarouselNextIcon(props) {
    return (
        <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_10" data-name="Path 10" d="M8,16,6.545,14.545l5.506-5.506H0V6.961H12.052L6.545,1.455,8,0l8,8Z" fill="#fff" />
        </SvgIcon>
    );
}

// export function NavToggleIcon(props) {
//     return (
//         <SvgIcon {...props} width="24px" height="24px" viewBox="0 0 24 24">
//             <g>
//                 <path fill="none" d="M0 0h24v24H0z" />
//                 <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
//             </g>
//         </SvgIcon>
//     );
// }
export function NavToggleIcon({ isOpen, ...props }) {
    return (
        <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24">
            {isOpen ? (
                // X icon for when the drawer is open
                <path d="M4 4 L20 20 M4 20 L20 4" stroke="#fff" strokeWidth="2" />
            ) : (
                // Hamburger icon for when the drawer is closed
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            )}
        </SvgIcon>
    );
}

export function LogArrowIcon(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 8.828 14.827">
            <path
                id="Path_29214"
                data-name="Path 29214"
                d="M3847.184,1022.835l6,6-6,6"
                transform="translate(-3845.77 -1021.421)"
                fill="none"
                stroke="#08597a"
                strokeLinecap="round"
                strokeWidth="2"
            />
        </SvgIcon>
    );
}