import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Link, Spacer, Input, Text } from "@chakra-ui/react";

import roboPunkNFT from "./AfroPunkNFT.json";
const roboPunkNFTAddress = "0x605D640a77C34463ea333826fD4cE1eB89FcFc58";

const MainMint = ({ accounts, setAccounts }) => {
	const [mintAmount, setMintAmount] = useState(1);
	const isConnected = Boolean(accounts[0]);

	async function handleMint() {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				roboPunkNFTAddress,
				roboPunkNFT.abi,
				signer
			);

			try {
				const response = await contract.mint(BigNumber.from(mintAmount), {
					value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
				});
				console.log("response from MainMint", response);
                alert("MINT successful");
			} catch (error) {
				console.log("error occured in MainMint", error);
			}
		}
	}

	const handleDecrement = () => {
		if (mintAmount <= 1) return;
		setMintAmount(mintAmount - 1);
	};

	const handleIncrement = () => {
		if (mintAmount >= 3) return;
		setMintAmount(mintAmount + 1);
	};

	return (
		<Flex justify="center" align="center" height="100vh" paddingBottom="150px">
			<Box width="500px">
				<div>
					<Text fontSize="48px">AfroPunkNFT</Text>
					<Text fontFamily="VT323" fontSize="30px">
						Afro Nation is one of the largest Afrobeat organization that brings people together to celebrate music and culture. This platform enables interested users to buy NFTs as tickets and attend any Afro Nation event
					</Text>
				</div>

				{isConnected ? (
					<div>
						<Flex justify="center" align="center">
							<Button
								backgroundColor="#D6517D"
								color="white"
								borderRadius="5px"
								padding="15px"
								cursor="pointer"
								boxShadow="0px 2px 2px 1px #0F0F0F"
								fontFamily="inherit"
								margin="0 15px"
								onClick={handleDecrement}
							>
								-
							</Button>

							<Input
								readOnly
								fontFamily="inherit"
								marginTop="10px"
								width="100px"
								height="40px"
								textAlign="center"
								paddingLeft="20px"
								type="number"
								value={mintAmount}
							/>

							<Button
								backgroundColor="#D6517D"
								color="white"
								borderRadius="5px"
								padding="15px"
								cursor="pointer"
								boxShadow="0px 2px 2px 1px #0F0F0F"
								fontFamily="inherit"
								margin="0 15px"
								onClick={handleIncrement}
							>
								+
							</Button>
						</Flex>
						<Button
							backgroundColor="#D6517D"
							color="white"
							borderRadius="5px"
							padding="15px"
							cursor="pointer"
							boxShadow="0px 2px 2px 1px #0F0F0F"
							fontFamily="inherit"
							margin="10px 15px"
							onClick={handleMint}
						>
							Buy NFT Now
						</Button>
					</div>
				) : (
					<Text fontFamily="VT323" fontSize="30px" marginTop="70px" color="#D6517D">You must be connected to buy NFT</Text>
				)}
			</Box>
		</Flex>
	);
};

export default MainMint;
