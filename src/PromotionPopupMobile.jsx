import React, { useState } from "react";
import styled from "styled-components";
function RectangleMobile() {
  const [isCheck, setIsCheck] = useState(false);
  const [isWeekCheck, setIsWeekCheck] = useState(false);
  const handleCheckBox = () => {
    console.log("test-check");
    isCheck ? setIsCheck(false) : setIsCheck(true);
  };
  const handleWeekCheckBox = () => {
    console.log("test-WeekCheck");
    isWeekCheck ? setIsWeekCheck(false) : setIsWeekCheck(true);
  };
  return (
    <Wrapper>
      <NavTop></NavTop>
      <Container>
        <IntroContainer>
          <Button>안내</Button>
          <Title fontSize={22}>우잉 신규 상품 및 할인 안내</Title>
          <Explain fontSize={8}>
            우잉 서비스를 이용해주시는 고객님께 진심으로 감사드립니다. <br></br>
            우잉을 애용해주시는 고객님을 위한 신규 상품 출시 및 할인 프로모션을
            안내드립니다.
          </Explain>
        </IntroContainer>
        <PeriodContainer>
          <ButtonActive width={40} padding={5}>
            기간
          </ButtonActive>
          <p> 2023.07.15 ~ 2023.08.31</p>
        </PeriodContainer>
        <PromoContainer>
          {" "}
          <TextRowWrapper>
            <ButtonNum>01</ButtonNum> <Title fontSize={20}>특별할인</Title>
            <Title fontSize={20}>프로모션</Title>
          </TextRowWrapper>
          <Explain fontSize={10}>
            우잉을 애용해주시는 고객님을 위한 한시적 프로모션 상품을
            <br></br>출시하였습니다. 기간 내에 구매 시 특별 할인된 가격으로{" "}
            <br></br>
            서비스를 이용하실 수 있습니다.
          </Explain>
          <BoxWrapper>
            <Box>
              <BoxColunmWrapper>
                <Title fontSize={20} style={{ textAlign: "left" }}>
                  우잉 베이직
                </Title>
                <BoxRowWrapper style={{ paddingBottom: 20 }}>
                  <BoxExplain fontSize={10}>연간 계약 시</BoxExplain>
                  <BoxExplain fontSize={10}>1개월 무료 제공</BoxExplain>
                </BoxRowWrapper>
                <PriceColumnWapper>
                  <BoxRowWrapper>
                    <BoxExplain
                      fontSize={10}
                      style={{
                        width: 34,
                        marginRight: 15,
                        marginLeft: 3,
                        paddingBottom: 3,
                      }}
                    >
                      정상가
                    </BoxExplain>
                    <BoxExplain fontSize={10}>480,000원</BoxExplain>
                  </BoxRowWrapper>
                  <BoxRowWrapper>
                    <ButtonActive width={34} padding={5} fontSize={5}>
                      할인가
                    </ButtonActive>
                    <BoxTitle fontSize={15}>440,000</BoxTitle>
                    <BoxExplain fontSize={10}>(VAT미포함)</BoxExplain>
                  </BoxRowWrapper>
                </PriceColumnWapper>
              </BoxColunmWrapper>
            </Box>
            <Box>
              <BoxColunmWrapper>
                <Title fontSize={20} style={{ textAlign: "left" }}>
                  우잉 리테일
                </Title>
                <BoxRowWrapper style={{ paddingBottom: 20 }}>
                  <BoxExplain fontSize={10}>2개 매장 연간 계약 시</BoxExplain>
                  <BoxExplain fontSize={10}>&nbsp;이용료 10% 할인</BoxExplain>
                </BoxRowWrapper>
                <PriceColumnWapper>
                  <BoxRowWrapper>
                    <BoxExplain
                      fontSize={10}
                      style={{
                        width: 34,
                        marginRight: 15,
                        marginLeft: 3,
                        paddingBottom: 3,
                      }}
                    >
                      정상가
                    </BoxExplain>
                    <BoxExplain fontSize={10}>960,000원</BoxExplain>
                  </BoxRowWrapper>
                  <BoxRowWrapper>
                    <ButtonActive width={34} padding={5} fontSize={5}>
                      할인가
                    </ButtonActive>
                    <BoxTitle fontSize={15}>864,000</BoxTitle>
                    <BoxExplain fontSize={10}>(VAT미포함)</BoxExplain>
                  </BoxRowWrapper>
                </PriceColumnWapper>
              </BoxColunmWrapper>
            </Box>
          </BoxWrapper>
        </PromoContainer>
        <PromoContainer>
          {" "}
          <TextRowWrapper>
            <ButtonNum>02</ButtonNum> <Title fontSize={20}>신규 서비스</Title>
            <Title fontSize={20}>상품 출시</Title>
          </TextRowWrapper>
          <Explain fontSize={10}>
            전시/박람회 고객을 위한 신규 서비스 상품을 출시하였습니다. <br></br>
            50개 부스이상, 7일 이내 단기로 이용하시는 고객님들께서 더 저렴한
            요금제로 이용하실 수 있습니다.
          </Explain>
          <BoxWrapper>
            <Box>
              <BoxColunmWrapper>
                <Title fontSize={20} style={{ textAlign: "left" }}>
                  우잉 컨벤션
                </Title>
                <BoxColunmWrapper style={{ paddingBottom: 20 }}>
                  <BoxExplain fontSize={8}>
                    7일 이내 단기 사용, 50개 이상 계정 이용 시
                  </BoxExplain>
                  <BoxExplain fontSize={10}>리테일과 동일한 기능</BoxExplain>
                </BoxColunmWrapper>
                <PriceColumnWapper>
                  <BoxRowWrapper>
                    <BoxExplain
                      fontSize={10}
                      style={{
                        width: 34,
                        marginRight: 15,
                        marginLeft: 3,
                        paddingBottom: 3,
                      }}
                    >
                      정상가
                    </BoxExplain>
                    <BoxExplain fontSize={10}>480,000원</BoxExplain>
                  </BoxRowWrapper>
                  <BoxRowWrapper>
                    <ButtonActive width={34} padding={5} fontSize={5}>
                      할인가
                    </ButtonActive>
                    <BoxTitle fontSize={15}>35,000</BoxTitle>
                    <BoxExplain fontSize={10}>(VAT미포함)</BoxExplain>
                  </BoxRowWrapper>
                </PriceColumnWapper>
              </BoxColunmWrapper>
            </Box>
            <Box>
              <BoxColunmWrapper>
                <BoxRowWrapper>
                  <Title fontSize={20} style={{ textAlign: "left" }}>
                    알림톡
                  </Title>
                  <BoxExplain fontSize={8}>(컨벤션 전용 상품)</BoxExplain>
                </BoxRowWrapper>
                <BoxColunmWrapper style={{ paddingBottom: 20 }}>
                  <BoxExplain fontSize={8}>5,000건 이상 구매 시</BoxExplain>
                  <BoxExplain fontSize={10}>
                    대량 건에 대해 25% 할인 적용
                  </BoxExplain>
                </BoxColunmWrapper>
                <PriceColumnWapper>
                  <BoxRowWrapper>
                    <BoxExplain
                      fontSize={10}
                      style={{
                        width: 34,
                        marginRight: 15,
                        marginLeft: 3,
                        paddingBottom: 3,
                      }}
                    >
                      정상가
                    </BoxExplain>
                    <BoxExplain fontSize={10}>480,000원</BoxExplain>
                  </BoxRowWrapper>
                  <BoxRowWrapper>
                    <ButtonActive width={34} padding={5} fontSize={5}>
                      할인가
                    </ButtonActive>
                    <BoxTitle fontSize={15}>75,000</BoxTitle>
                    <BoxExplain fontSize={10}>(VAT미포함)</BoxExplain>
                  </BoxRowWrapper>
                </PriceColumnWapper>
              </BoxColunmWrapper>
            </Box>
          </BoxWrapper>
        </PromoContainer>
        <Title fontSize={10} style={{ paddingBottom: 10 }}>
          * 신규 서비스 상품은 계좌이체, 카드결제 모두 가능합니다.
        </Title>
        <ButtonActive width={120} bold padding={10} fontSize={26}>
          신청하기
        </ButtonActive>
      </Container>
      <BottomWrapper>
        <BoxExplain fontSize={12} onClick={handleWeekCheckBox}>
          {isWeekCheck ? (
            <svg
              width="15px"
              height="15px"
              viewBox="-2.4 -2.4 28.8 28.8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#9c9c9c"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Interface / Checkbox_Check">
                  <path
                    id="Vector"
                    d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              fill="#c4c4c4"
              width="15px"
              height="15px"
              viewBox="-2.4 -2.4 28.8 28.8"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c4c4c4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,2H4A1,1,0,0,0,3,3V21a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM21,20H5V4H21Z"></path>
              </g>
            </svg>
          )}
          1주일동안 보지 않기
        </BoxExplain>
        <BoxExplain fontSize={12} onClick={handleCheckBox}>
          {isCheck ? (
            <svg
              width="15px"
              height="15px"
              viewBox="-2.4 -2.4 28.8 28.8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#9c9c9c"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Interface / Checkbox_Check">
                  <path
                    id="Vector"
                    d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              fill="#c4c4c4"
              width="15px"
              height="15px"
              viewBox="-2.4 -2.4 28.8 28.8"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c4c4c4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,2H4A1,1,0,0,0,3,3V21a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM21,20H5V4H21Z"></path>
              </g>
            </svg>
          )}
          하루동안 보지 않기
        </BoxExplain>
        <CloseButton>닫기</CloseButton>
      </BottomWrapper>
    </Wrapper>
  );
}

export default RectangleMobile;
const Wrapper = styled.div`
  display: flex;
  width: 290px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 30px;
  height: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  border: 2px solid #1c9da9;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: space-evenly;
`;
const TextRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
`;
const TextColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BoxRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 60px;
  right: 0;
  bottom: 0;
  position: absolute;
`;
const BoxColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  align-items: center;
  color: black;
  text-align: center;
`;
const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 125px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
`;
const PeriodContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  height: 55px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: black;
`;
const PromoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
`;
const Box = styled.div`
  display: flex;
  width: 250px;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fafafa;
  border-radius: 12px;
  padding: 16px;
`;
const NavTop = styled.div`
  background-color: #1c9da9;
  opacity: 1;
  width: 340px;
  height: 14px;
  top: 0;
  left: 0;
  position: absolute;
`;
const Button = styled.div`
  display: flex;
  width: 38px;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #1c9da9;
  background: white;
  border: 2px solid #1c9da9;
  border-radius: 24px;
  padding: 10px 12px;
`;
const ButtonNum = styled.div`
  display: flex;
  width: 20px;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #1c9da9;
  background: white;
  border: 2px solid #1c9da9;
  border-radius: 15px;
  padding: 5px 6px;
`;
const Title = styled.div`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: bold;
  padding: 3px;
`;
const Explain = styled.div`
  font-size: ${(props) => `${props.fontSize}px`};
  text-align: center;
  padding: 5px;
`;
const BoxTitle = styled.div`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: bold;
  padding: 5px;
`;
const BoxExplain = styled.div`
  font-size: ${(props) => `${props.fontSize}px`};
  text-align: center;
`;
const ButtonActive = styled.div`
  display: flex;
  width: ${(props) => `${props.width}px`};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "10px")};
  font-weight: ${(props) => (props.bold ? `bold` : null)};
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 8px;
  background: #1c9da9;
  border-radius: 24px;
  padding: ${(props) => `${props.padding}px`};
`;
const CloseButton = styled.button`
  display: flex;
  width: 70px;
  height: 26px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
  background: white;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 5px 6px;
`;
const PriceColumnWapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
`;
