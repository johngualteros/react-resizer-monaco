import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { ResizableBox } from "react-resizable";

function App() {
	const editorRef = useRef(null);

	const [state, setState] = useState({
		width: 500,
		height: 200,
	});

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	const onResize = (event, { element, size, handle }) => {
		setState({ width: size.width, height: size.height });
	};

	function handleEditorChange(value, event) {
		const renderer = document.getElementById("renderer");

		renderer.innerHTML = value;
	}

	const Container = styled.div`
		width: 100%;
		height: 100vh;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 1fr;
		padding: 0;
		overflow: hidden;
	`;

	const defaultValueEditor = `
<div class="p-4">
   <div style="color: red; text-align: center;" role="alert">
      Alert
   </div>

   <div class="card">
      <div class="card-body">
         <h5 class="card-title">Special title treatment</h5>
         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </div>
</div>
`;

	const RendererHtmlCode = styled.div`
		width: 100%;
		height: 100%;
		background-color: #ff3232;
		color: #fff;
		padding: 1rem;
		overflow: auto;
	`;

	return (
		<Container>
			<Editor
				height="100vh"
				defaultLanguage="html"
				theme="vs-dark"
				defaultValue={defaultValueEditor}
				onMount={handleEditorDidMount}
				onChange={handleEditorChange}
			/>
			<ResizableBox width={'100%'} height={200}>
				<RendererHtmlCode id="renderer"></RendererHtmlCode>
			</ResizableBox>
		</Container>
	);
}

export default App;
