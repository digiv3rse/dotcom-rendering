import { palette } from '../palette';

export const SvgGuardianBestNewspaperLogo = () => {
	const textColour = palette('--guardian-logo');
	const accentTextColour = palette('--guardian-logo-accent');
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 300 116"
				focusable={false}
				aria-hidden={true}
				fill="none"
			>
				<path
					fill={accentTextColour}
					d="M74 99.926h2.294l3.008 5.1c.233.401.466.834.698 1.3.244.455.46.877.649 1.267.221.466.437.926.648 1.381h.05c-.033-.477-.061-.959-.083-1.446-.022-.412-.045-.856-.067-1.332a60.14 60.14 0 0 1-.016-1.365v-4.905h1.861v11.712h-2.011l-3.308-5.669a33.815 33.815 0 0 1-.714-1.3 81.944 81.944 0 0 1-1.28-2.696h-.067l.1 1.478c.022.422.044.877.066 1.364.023.488.034.937.034 1.348v5.475H74V99.926ZM89.244 111.8c-1.463 0-2.543-.352-3.241-1.056-.687-.704-1.03-1.732-1.03-3.086v-.796c0-.715.099-1.332.298-1.852.2-.53.477-.964.831-1.299.355-.347.77-.601 1.247-.764.477-.173.997-.26 1.563-.26 1.307 0 2.249.331 2.825.991.576.661.865 1.679.865 3.054v1.088h-5.569c.011.488.072.888.183 1.202.11.304.272.542.482.715.222.173.493.292.815.357a5.76 5.76 0 0 0 1.13.098c.587 0 1.08-.054 1.48-.163.41-.119.808-.27 1.196-.454v1.413c-.3.184-.698.368-1.197.552-.487.173-1.114.26-1.878.26Zm-.35-7.651c-.232 0-.459.033-.68.098a1.29 1.29 0 0 0-.582.341c-.178.162-.322.395-.433.698-.11.293-.171.677-.182 1.154h3.59c0-.878-.144-1.479-.432-1.803-.288-.325-.715-.488-1.28-.488ZM93.42 102.85H95.5l.797 3.248c.09.347.178.759.266 1.235.09.466.167.91.233 1.332.078.498.155 1.007.233 1.527h.066c.067-.509.144-1.013.233-1.511.078-.422.16-.866.25-1.332.1-.476.199-.893.299-1.251l.897-3.248h1.795l.898 3.248c.089.347.183.759.282 1.235l.283 1.332c.1.498.188 1.007.266 1.527h.066l.233-1.511c.067-.422.139-.866.216-1.332.089-.476.178-.893.266-1.251l.781-3.248h1.812l-2.41 8.788h-2.028l-1.014-3.574a10.239 10.239 0 0 1-.266-1.121c-.066-.422-.127-.823-.183-1.202-.055-.433-.11-.882-.166-1.348h-.066c-.045.466-.094.915-.15 1.348a33.5 33.5 0 0 1-.2 1.202c-.077.422-.16.796-.249 1.121l-1.014 3.574h-2.077l-2.427-8.788ZM109.469 111.784a8.357 8.357 0 0 1-1.596-.146 5.052 5.052 0 0 1-1.297-.423v-1.559c.189.076.372.146.549.211.177.065.366.125.565.179.211.043.438.081.682.113.243.022.52.033.831.033.598 0 1.025-.081 1.28-.244a.824.824 0 0 0 .399-.731c0-.292-.073-.514-.217-.666-.133-.162-.443-.303-.93-.422l-.981-.227a4.134 4.134 0 0 1-.898-.309 2.395 2.395 0 0 1-.681-.487 2.1 2.1 0 0 1-.432-.731 3.17 3.17 0 0 1-.15-1.024c0-.812.26-1.456.781-1.933.532-.487 1.352-.731 2.46-.731.599 0 1.097.049 1.496.147.41.086.759.2 1.047.341v1.527a5.483 5.483 0 0 0-.997-.293 5.922 5.922 0 0 0-1.363-.146c-1.019 0-1.529.314-1.529.942 0 .292.078.514.233.666.166.141.443.255.831.341l.98.228c.854.195 1.452.487 1.796.877.343.39.515.969.515 1.738 0 .909-.288 1.592-.864 2.047-.577.454-1.413.682-2.51.682ZM114.412 102.85h1.928v.909h.083c.255-.314.599-.568 1.031-.763.432-.206.925-.309 1.479-.309.455 0 .887.071 1.297.211.41.13.77.352 1.08.666.31.315.554.731.732 1.251.188.509.282 1.148.282 1.917v.715c0 .779-.089 1.445-.266 1.998-.177.552-.432 1.001-.764 1.348a2.992 2.992 0 0 1-1.214.763 4.702 4.702 0 0 1-1.562.244c-.521 0-.953-.07-1.297-.211a4.212 4.212 0 0 1-.814-.471v3.817h-1.995V102.85Zm3.74 7.472c.344 0 .643-.043.898-.13.266-.087.487-.233.664-.439.178-.205.311-.476.399-.812.089-.336.133-.753.133-1.251v-.828c0-.498-.044-.91-.133-1.235-.077-.335-.199-.601-.365-.796a1.308 1.308 0 0 0-.632-.406 3.125 3.125 0 0 0-.881-.113c-.421 0-.792.059-1.114.178-.31.109-.548.222-.714.341v4.971c.166.13.404.249.714.357.311.109.654.163 1.031.163ZM126.149 111.8c-.798 0-1.44-.206-1.928-.617-.488-.412-.731-1.045-.731-1.901 0-.812.243-1.418.731-1.819.488-.412 1.169-.671 2.045-.78l1.994-.26v-.666c0-.281-.033-.514-.1-.698a.8.8 0 0 0-.332-.422c-.144-.109-.344-.185-.598-.228a5.401 5.401 0 0 0-.915-.065c-.421 0-.82.027-1.196.081-.366.055-.682.109-.948.163v-1.413c.809-.325 1.784-.488 2.926-.488 1.008 0 1.784.206 2.327.618.554.411.831 1.082.831 2.014v6.319h-1.646l-.166-.878h-.1c-.21.282-.487.526-.831.731-.343.206-.798.309-1.363.309Zm.615-1.413c.31 0 .593-.044.848-.13a1.94 1.94 0 0 0 .648-.374v-2.225l-1.546.146c-.82.076-1.23.536-1.23 1.381 0 .422.117.731.349.926.233.184.543.276.931.276ZM132.349 102.85h1.928v.909h.083c.255-.314.598-.568 1.031-.763.432-.206.925-.309 1.479-.309.454 0 .886.071 1.296.211.41.13.771.352 1.081.666.31.315.554.731.731 1.251.189.509.283 1.148.283 1.917v.715c0 .779-.089 1.445-.266 1.998-.178.552-.432 1.001-.765 1.348a2.988 2.988 0 0 1-1.213.763 4.708 4.708 0 0 1-1.563.244c-.521 0-.953-.07-1.296-.211a4.223 4.223 0 0 1-.815-.471v3.817h-1.994V102.85Zm3.74 7.472c.343 0 .642-.043.897-.13.266-.087.488-.233.665-.439.177-.205.31-.476.399-.812.089-.336.133-.753.133-1.251v-.828c0-.498-.044-.91-.133-1.235-.078-.335-.199-.601-.366-.796a1.3 1.3 0 0 0-.631-.406 3.13 3.13 0 0 0-.881-.113c-.421 0-.793.059-1.114.178-.31.109-.548.222-.715.341v4.971c.167.13.405.249.715.357.31.109.654.163 1.031.163ZM145.765 111.8c-1.463 0-2.544-.352-3.242-1.056-.687-.704-1.03-1.732-1.03-3.086v-.796c0-.715.1-1.332.299-1.852.199-.53.476-.964.831-1.299.355-.347.77-.601 1.247-.764.476-.173.997-.26 1.562-.26 1.308 0 2.25.331 2.826.991.576.661.864 1.679.864 3.054v1.088h-5.568c.011.488.072.888.183 1.202.111.304.271.542.482.715.221.173.493.292.814.357.322.065.698.098 1.131.098.587 0 1.08-.054 1.479-.163a7.98 7.98 0 0 0 1.197-.454v1.413c-.3.184-.698.368-1.197.552-.488.173-1.114.26-1.878.26Zm-.349-7.651c-.233 0-.46.033-.682.098-.21.054-.404.168-.582.341-.177.162-.321.395-.432.698-.111.293-.172.677-.183 1.154h3.591c0-.878-.144-1.479-.433-1.803-.288-.325-.714-.488-1.279-.488ZM150.673 102.85h1.911v1.202h.1c.111-.184.25-.358.416-.52a3.156 3.156 0 0 1 1.23-.698c.232-.076.465-.114.698-.114.277 0 .454.027.532.081v1.787a2.208 2.208 0 0 0-.349-.049 4.074 4.074 0 0 0-1.529.163 3.769 3.769 0 0 0-1.014.422v6.514h-1.995v-8.788ZM164.704 111.8c-1.297 0-2.305-.352-3.025-1.056-.721-.704-1.081-1.732-1.081-3.086v-.747c0-.693.105-1.3.316-1.82a3.81 3.81 0 0 1 .864-1.332 3.465 3.465 0 0 1 1.297-.796 4.81 4.81 0 0 1 1.645-.276c1.275 0 2.266.352 2.976 1.056.72.693 1.08 1.722 1.08 3.086v.748c0 .704-.105 1.321-.316 1.851-.199.52-.482.959-.847 1.316a3.58 3.58 0 0 1-1.28.796 4.942 4.942 0 0 1-1.629.26Zm.033-1.511c.632 0 1.114-.195 1.446-.584.344-.39.515-1.045.515-1.966v-.893c0-.553-.055-.997-.166-1.332-.1-.347-.244-.618-.432-.812a1.288 1.288 0 0 0-.632-.39 2.606 2.606 0 0 0-.781-.114c-.631 0-1.125.2-1.479.601-.355.401-.532 1.056-.532 1.965v.91c0 .542.05.986.149 1.332.111.336.261.601.449.796.189.184.405.314.649.39.254.065.526.097.814.097ZM171.111 104.393h-1.463v-1.543h1.463v-1.089c0-.953.266-1.651.798-2.095.543-.444 1.235-.666 2.077-.666.41 0 .759.032 1.047.097.3.055.527.125.682.212v1.364a3.477 3.477 0 0 0-.499-.081 4.522 4.522 0 0 0-.698-.049c-.465 0-.82.108-1.064.325-.232.217-.349.574-.349 1.072v.91h2.145v1.543h-2.145v7.245h-1.994v-7.245ZM183.96 111.751c-.377 0-.715-.038-1.014-.113a2.084 2.084 0 0 1-.781-.374 1.78 1.78 0 0 1-.499-.682c-.111-.293-.166-.65-.166-1.072v-5.117h-1.48v-1.543h1.48v-2.128h1.994v2.128h2.311v1.543h-2.311v4.808c0 .379.078.639.233.78.166.14.46.211.881.211.188 0 .416-.022.682-.065a2.87 2.87 0 0 0 .631-.163v1.332c-.188.12-.454.228-.798.325-.343.087-.731.13-1.163.13ZM187.327 99.146h1.995v4.597h.083a3.805 3.805 0 0 1 1.213-.747 3.934 3.934 0 0 1 1.546-.309c.831 0 1.452.19 1.862.569.421.379.632.996.632 1.852v6.53h-1.995v-6.043c0-.444-.094-.758-.283-.942-.188-.195-.57-.293-1.147-.293a3.8 3.8 0 0 0-1.013.147 4.3 4.3 0 0 0-.898.324v6.807h-1.995V99.146ZM200.565 111.8c-1.463 0-2.543-.352-3.242-1.056-.687-.704-1.03-1.732-1.03-3.086v-.796c0-.715.1-1.332.299-1.852.2-.53.477-.964.831-1.299.355-.347.77-.601 1.247-.764.476-.173.997-.26 1.562-.26 1.308 0 2.25.331 2.826.991.576.661.864 1.679.864 3.054v1.088h-5.568c.011.488.072.888.183 1.202.111.304.271.542.482.715.222.173.493.292.814.357.322.065.698.098 1.131.098.587 0 1.08-.054 1.479-.163a7.98 7.98 0 0 0 1.197-.454v1.413c-.299.184-.698.368-1.197.552-.488.173-1.114.26-1.878.26Zm-.349-7.651c-.233 0-.46.033-.682.098-.21.054-.404.168-.582.341-.177.162-.321.395-.432.698-.111.293-.172.677-.183 1.154h3.591c0-.878-.144-1.479-.432-1.803-.289-.325-.715-.488-1.28-.488ZM210.509 115c-.233 0-.482-.027-.748-.081-.255-.044-.449-.109-.582-.195v-1.381c.255.054.548.081.881.081.399 0 .726-.086.981-.26.266-.173.476-.465.631-.877l.316-.828-3.125-8.609h2.111l.981 2.859c.155.454.293.936.415 1.445.133.498.244.953.333 1.365.111.487.205.964.282 1.429h.05c.089-.465.189-.942.299-1.429.089-.412.194-.867.316-1.365.133-.509.277-.991.432-1.445l.931-2.859h1.978l-3.44 9.746c-.289.834-.665 1.44-1.131 1.819-.465.39-1.102.585-1.911.585ZM221.878 111.8c-1.463 0-2.543-.352-3.242-1.056-.687-.704-1.03-1.732-1.03-3.086v-.796c0-.715.1-1.332.299-1.852.199-.53.477-.964.831-1.299.355-.347.77-.601 1.247-.764.476-.173.997-.26 1.562-.26 1.308 0 2.25.331 2.826.991.576.661.864 1.679.864 3.054v1.088h-5.568c.011.488.072.888.183 1.202.111.304.271.542.482.715.221.173.493.292.814.357.322.065.698.098 1.131.098.587 0 1.08-.054 1.479-.163a7.98 7.98 0 0 0 1.197-.454v1.413c-.299.184-.698.368-1.197.552-.488.173-1.114.26-1.878.26Zm-.349-7.651c-.233 0-.46.033-.682.098-.21.054-.404.168-.582.341-.177.162-.321.395-.432.698-.111.293-.172.677-.183 1.154h3.591c0-.878-.144-1.479-.433-1.803-.288-.325-.714-.488-1.279-.488ZM228.997 111.8c-.798 0-1.441-.206-1.928-.617-.488-.412-.732-1.045-.732-1.901 0-.812.244-1.418.732-1.819.487-.412 1.169-.671 2.044-.78l1.995-.26v-.666c0-.281-.034-.514-.1-.698a.804.804 0 0 0-.332-.422c-.145-.109-.344-.185-.599-.228a5.388 5.388 0 0 0-.914-.065c-.421 0-.82.027-1.197.081a19.36 19.36 0 0 0-.947.163v-1.413c.809-.325 1.784-.488 2.925-.488 1.009 0 1.784.206 2.327.618.554.411.831 1.082.831 2.014v6.319h-1.645l-.166-.878h-.1a2.84 2.84 0 0 1-.831.731c-.344.206-.798.309-1.363.309Zm.615-1.413c.31 0 .593-.044.847-.13.266-.098.482-.222.649-.374v-2.225l-1.546.146c-.82.076-1.23.536-1.23 1.381 0 .422.116.731.349.926.233.184.543.276.931.276ZM235.113 102.85h1.912v1.202h.099c.111-.184.25-.358.416-.52a3.156 3.156 0 0 1 1.23-.698c.233-.076.465-.114.698-.114.277 0 .454.027.532.081v1.787a2.208 2.208 0 0 0-.349-.049 4.08 4.08 0 0 0-1.529.163 3.769 3.769 0 0 0-1.014.422v6.514h-1.995v-8.788Z"
				/>
				<path
					fill={textColour}
					d="m68.131 51.554 5.152-2.675V8.502h-3.896L59.87 21.091h-1.075l.607-14.032h41.262l.596 14.032h-1.129L90.806 8.502h-3.992v40.292l5.184 2.728v1.369H68.131v-1.337Zm37.27-1.784V5.02l-4.003-1.592V2.59L115.866 0h1.522v21.175l.404-.34c3.205-2.79 7.804-4.585 12.402-4.585 6.335 0 9.134 3.567 9.134 10.211v23.31l3.386 1.835v1.36h-18.917v-1.349l3.395-1.847V26.376c0-3.65-1.596-5.116-4.598-5.116-2.002 0-3.726.627-5.004 1.646v26.917l3.332 1.837v1.295h-18.927V51.67l3.406-1.9Zm48.331-13.745c.393 7.398 3.715 13.12 11.592 13.12 3.811 0 6.515-1.763 9.06-3.1V47.5c-1.97 2.686-6.962 6.454-13.914 6.454-12.21 0-18.449-6.762-18.449-18.48 0-11.453 6.824-18.585 17.853-18.585 10.369 0 15.755 5.169 15.755 18.776v.35h-21.897v.01Zm-.203-1.698 10.742-.658c0-9.16-1.576-15.242-4.727-15.242-3.343 0-6.015 7.058-6.015 15.9ZM0 70.808C0 51.33 12.934 44.399 27.338 44.399c6.11 0 11.88.977 15.105 2.314l.277 13.597h-1.373l-8.453-13.15c-1.447-.616-2.82-.86-5.354-.86-7.654 0-11.572 8.82-11.455 23.287.15 17.301 3.162 25.156 10.188 25.156 1.831 0 3.236-.276 4.216-.7V75.498l-4.642-2.653v-1.55h22.42v1.656L43.7 75.499v18.288c-3.79 1.476-10.188 2.877-16.937 2.877C10.39 96.664 0 89.096 0 70.808Zm47.478-9.086v-1.125l15.075-2.653 1.65.138v29.614c0 3.566 1.724 4.67 4.609 4.67 1.863 0 3.545-.7 4.886-2.303V63.505l-4.13-1.784v-1.167L84.642 57.9l1.511.138v33.945l4.067 1.698v1.083L75.348 96.59l-1.511-.138v-4.458h-.416c-2.757 2.537-6.61 4.734-11.294 4.734-7.229 0-10.54-4.256-10.54-10.71V63.507l-4.109-1.785Zm95.289-3.842 1.235.138v10.964h.34c1.608-8.035 5.163-11.038 9.496-11.038.692 0 1.448.063 1.863.275v11.22c-.692-.202-1.927-.276-3.098-.276-3.438 0-5.972.615-8.197 1.634v21.675l3.428 1.9v1.4h-19.545v-1.39l3.524-1.9V62.9l-4.131-1.23v-1.01l15.085-2.78Z"
				/>
				<path
					fill={textColour}
					d="M180.622 58.804v-11.57l-4.131-1.443v-.924l15.213-2.791 1.447.201v49.686l4.205 1.518v1.284l-15.01 2.016-1.171-.137v-4.108h-.34c-2.204 2.197-5.238 4.182-9.986 4.182-8.197 0-14.18-6.241-14.18-19.01 0-13.46 6.952-20.072 17.491-20.072 3.013 0 5.291.552 6.462 1.168Zm-.032 31.81V60.917c-.969-.616-1.661-1.38-4.163-1.295-4.066.138-6.578 6.273-6.578 17.184 0 9.819 1.809 15.306 7.228 15.126 1.522-.053 2.757-.595 3.513-1.316v-.002Zm33.48-32.766 1.309.138V92.46l3.439 1.9v1.4h-19.545v-1.39l3.513-1.9V63.43l-4.205-1.645v-1.147l15.489-2.79Zm1.384-9.31c0 3.642-3.098 6.38-6.675 6.38-3.715 0-6.611-2.749-6.611-6.38 0-3.64 2.896-6.453 6.611-6.453 3.577 0 6.675 2.813 6.675 6.454v-.001Zm45.999 43.934v-29.36l-4.131-1.443v-1.422l15.01-2.792 1.512.138v4.394h.415c3.236-2.887 8.059-4.734 12.807-4.734 6.536 0 9.432 3.09 9.432 9.957v25.198L300 94.36v1.4h-19.545v-1.39l3.513-1.9V67.9c0-3.778-1.65-5.285-4.748-5.285-2.001 0-3.641.51-5.163 1.634v28.213l3.438 1.9v1.4H257.94v-1.39l3.513-1.9Zm-21.685-18.448v-4.925c0-7.42-1.618-9.85-6.217-9.85-.543 0-1.011.063-1.554.137l-8.186 11.06h-1.15V60.269c3.513-1.083 7.91-2.357 13.733-2.357 10.006 0 15.829 2.77 15.829 11.124v24.01l3.588.944v.945c-1.416.88-4.258 1.687-7.377 1.687-4.94 0-7.303-1.613-8.389-4.32h-.341c-2.097 2.834-5.067 4.448-9.74 4.448-5.951 0-10.007-3.705-10.007-10.116 0-6.209 3.854-9.574 11.699-11.06l8.112-1.55Zm0 16.59v-14.84l-2.501.203c-3.929.34-5.344 2.834-5.344 8.364 0 5.997 1.958 7.557 4.737 7.557 1.554-.01 2.438-.478 3.108-1.284Zm-129.566-16.59v-4.925c0-7.42-1.618-9.85-6.227-9.85-.543 0-1.012.063-1.555.137l-8.186 11.06h-1.15V60.269c3.513-1.083 7.91-2.357 13.733-2.357 10.007 0 15.83 2.77 15.83 11.124v24.01l3.587.944v.945c-1.416.88-4.258 1.687-7.377 1.687-4.94 0-7.303-1.613-8.389-4.32h-.34c-2.097 2.834-5.078 4.448-9.741 4.448-5.95 0-10.007-3.705-10.007-10.116 0-6.209 3.854-9.574 11.7-11.06l8.122-1.55Zm0 16.59v-14.84l-2.501.203c-3.929.34-5.344 2.834-5.344 8.364 0 5.997 1.958 7.557 4.737 7.557 1.543-.01 2.427-.478 3.108-1.284Z"
				/>
			</svg>
		</>
	);
};
