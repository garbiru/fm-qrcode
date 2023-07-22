import ImageQRCode from "./assets/image-qr-code.png";

function App() {
	return (
		<div className="grid place-items-center min-h-screen">
			<div className="flex max-w-[20rem] mt-10 flex-col px-4 pt-4 pb-8 rounded-2xl bg-white text-center gap-5 shadow-md">
				<img
					src={ImageQRCode}
					alt="QRCode"
					className="object-contain rounded-lg"
				/>

				<div className="flex flex-col gap-3 p-2">
					<p className="font-bold text-2xl break-words">
						Improve your front-end skills by building projects
					</p>

					<p className="text-grayish-blue text-md leading-5">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
