/**
 * ServerSideRender component
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
declare module '@wordpress/server-side-render' {
	import {ComponentType, PropsWithChildren, ReactChild, ReactElement} from 'react';

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/#props
	 */
	interface ServerSideRender<A, U> {
		block: string;
		attributes?: A;
		className?: string;
		httpMethod?: 'GET' | 'POST';
		urlQueryArgs?: U;
		EmptyResponsePlaceholder?: ComponentType<ServerSideRender<A, U>>;
		ErrorResponsePlaceholder?: ComponentType<ServerSideRender<A, U> & {
			response: object;
		}>;
		LoadingResponsePlaceholder?: ComponentType<ServerSideRender<A, U> & {
			showLoader: boolean;
			children: ReactChild | [];
		}>;
	}


	function ServerSideRender<A, U = object>( props: PropsWithChildren<ServerSideRender<A, U>>, context?: any ): ReactElement;

	export default ServerSideRender;
}
