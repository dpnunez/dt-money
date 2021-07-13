import styled from "styled-components"

const Container = styled.header`
	background-color: var(--blue);
`

const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 12rem; // 32px 16px 144px
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		font-size: 1rem;
		color: #fff;
		background-color: var(--blue-light);
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;

		transition: filter 0.2s ease;

		&:hover {
			filter: brightness(0.9)
		}
	}
`

export { Container, Content }