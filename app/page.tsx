import React, { useState } from "react";

const EmotionalCard = () => {
	const [emotion, setEmotion] = useState("neutral");

	const handleEmotionChange = (newEmotion) => {
		setEmotion(newEmotion);
	};

	const getEmotionalStyles = () => {
		switch (emotion) {
			case "happy":
				return "bg-green-200 text-green-800 animate-pulse";
			case "sad":
				return "bg-blue-200 text-blue-800 animate-bounce";
			case "angry":
				return "bg-red-200 text-red-800 animate-shake";
			default:
				return "bg-gray-200 text-gray-800";
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className={`p-8 rounded-lg shadow-lg ${getEmotionalStyles()}`}>
				<h2 className="text-2xl font-bold mb-4">Emotionally Responsive Card</h2>
				<p className="mb-4">
					This card changes its appearance and animation based on your emotional
					state.
				</p>
				<div>
					<button
						className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
						onClick={() => handleEmotionChange("happy")}
					>
						Happy
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
						onClick={() => handleEmotionChange("sad")}
					>
						Sad
					</button>
					<button
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
						onClick={() => handleEmotionChange("angry")}
					>
						Angry
					</button>
				</div>
			</div>
		</div>
	);
};

export default EmotionalCard;
