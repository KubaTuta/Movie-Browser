import { Wrapper, Button, Text, InnerButtonText, RightArrow, LeftArrow } from "./styled";

const Pagination = ({ page, total }) => {
  return (
    <Wrapper>
      <Button page={page}>
        <LeftArrow /><LeftArrow />&nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button page={page}>
        <LeftArrow />&nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text><b>{page}</b><Text>of</Text><b>{total}</b>
      <Button page={page} total={total}>
        <InnerButtonText>Next</InnerButtonText>&nbsp;<RightArrow />
      </Button>
      <Button page={page} total={total}>
        <InnerButtonText>Last</InnerButtonText>&nbsp;<RightArrow /><RightArrow />
      </Button>
    </Wrapper>
  )
};

export default Pagination;