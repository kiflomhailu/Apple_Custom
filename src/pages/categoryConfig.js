import macbookProImg from "../images/home/macbook-pro.jpg";
import imacImg from "../images/home/mac-laptop.jpg";
import macbookAirImg from "../images/home/macbookair-new.jpg";
import iphoneSeImg from "../images/home/iphone11-bg.jpg";
import iphone14Img from "../images/home/iphone11-colored.jpg";
import iphone14ProImg from "../images/home/iphone11-pro-bg.jpg";
import ipadProImg from "../images/home/ipodPronew.jpg";
import ipadAirImg from "../images/home/macbookair-new-sm.jpg";
import ipadImg from "../images/home/new-ipad.jpg";
import watchUltraImg from "../images/home/watch-lg.jpg";
import watchSeriesImg from "../images/home/watch-series-5.jpg";
import watchSeImg from "../images/home/watch.jpg";
import appleTv4kImg from "../images/services/apple-tv-4k.svg";
import homepodImg from "../images/services/homepod.svg";
import homepodMiniImg from "../images/services/homepod-mini.svg";
import getSupportImg from "../images/services/get-support.svg";
import appleCarePlusImg from "../images/services/applecare-plus.svg";
import todayAtAppleImg from "../images/services/today-at-apple.svg";
import appleMusicImg from "../images/services/apple-music.svg";
import appleArcadeImg from "../images/services/apple-arcade.svg";
import appleFitnessImg from "../images/services/apple-fitness.svg";

export const categoryConfig = {
	mac: {
		pageTitle: "Which Mac notebook is right for you?",
		pageDescription: "Find the perfect combination of performance, portability, and battery life.",
		jsonFile: "mac.json",
		imageMap: {
			MacBookPro: macbookProImg,
			MacBookAir: macbookAirImg,
			IMac: imacImg,
		},
	},
	ipad: {
		pageTitle: "Which iPad is right for you?",
		pageDescription: "Draw, learn, play, and work in ways you’ve never imagined.",
		jsonFile: "ipad.json",
		imageMap: {
			iPadPro: ipadProImg,
			iPadAir: ipadAirImg,
			iPad: ipadImg,
		},
	},
	iphone: {
		pageTitle: "Which iPhone is right for you?",
		pageDescription: "Discover the full lineup of powerful and secure iPhone models.",
		jsonFile: "iphone.json",
		imageMap: {
			iPhoneSE: iphoneSeImg,
			iPhone14: iphone14Img,
			iPhone14Pro: iphone14ProImg,
		},
		detailPath: "/iphone",
	},
	watch: {
		pageTitle: "Which Apple Watch is right for you?",
		pageDescription: "Every Apple Watch keeps you active, healthy, and connected.",
		jsonFile: "watch.json",
		imageMap: {
			WatchUltra: watchUltraImg,
			WatchSeries: watchSeriesImg,
			WatchSE: watchSeImg,
		},
	},
	tv: {
		pageTitle: "TV & Home",
		pageDescription:
			"Get the best seat — and sound — in the house with Apple TV 4K and HomePod.",
		jsonFile: "tv.json",
		imageMap: {
			AppleTV4K: appleTv4kImg,
			HomePod: homepodImg,
			HomePodMini: homepodMiniImg,
		},
	},
	music: {
		pageTitle: "Music and More",
		pageDescription:
			"Stream, play, and move with Apple services designed for every beat.",
		jsonFile: "music.json",
		imageMap: {
			AppleMusic: appleMusicImg,
			AppleArcade: appleArcadeImg,
			AppleFitness: appleFitnessImg,
		},
	},
	support: {
		pageTitle: "Apple Support",
		pageDescription:
			"We’re here when you need help, protection, or inspiration.",
		jsonFile: "support.json",
		imageMap: {
			GetSupport: getSupportImg,
			AppleCarePlus: appleCarePlusImg,
			TodayAtApple: todayAtAppleImg,
		},
	},
};

export default categoryConfig;

