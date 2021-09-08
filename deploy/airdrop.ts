import { DeployFunction } from 'hardhat-deploy/types'

import { deploy } from '../utils/deploy-helpers'
import { BigNumberish, BigNumber as BN } from 'ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deployOptions: DeployFunction = async (hre) => {
  const { getNamedSigner, run, log } = hre
  const deployer = await getNamedSigner('deployer')

  // Make sure contracts are compiled
  await run('compile')

  log('')
  log('********** Teller Options **********', { indent: 1 })
  log('')

  const tellerOptions = await deploy({
    contract: 'AirdropToken',
    name: 'AirdropToken',
    args: ['Airdrop Token','ADT'],
    hre
    
  }) 
 
}
 

deployOptions.tags = ['airdrop']
deployOptions.dependencies = []

export default deployOptions