import { title } from "@/components/primitives";
import ReactiveEffect from "@/components/reactive-3d";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
      {/* <div className="grid grid-cols-2 max-w-screen h-screen">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className={title()}>Dynamic&nbsp;</h1>
          <h1 className={title()}>Never&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Ends&nbsp;</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
        </div>
      </div> */}
          <ReactiveEffect />
		</DefaultLayout>
	);
}
