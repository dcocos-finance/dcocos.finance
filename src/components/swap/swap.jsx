import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Button,
  Card,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Input,
  Link,
} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { withNamespaces } from 'react-i18next';

import Loader from '../loader/loader'
import Snackbar from '../snackbar/snackbar'
import UnlockModal from '../unlock/unlockModal.jsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CopyIcon from '@material-ui/icons/FileCopy';
import Proposal from './proposal'

import Store from "../../stores/store";
import { colors } from '../../theme/theme'

import {
  ERROR,
  CONFIGURE_RETURNED,
  PROPOSE,
  PROPOSE_RETURNED,
  GET_PROPOSALS,
  GET_PROPOSALS_RETURNED,
  VOTE_FOR_RETURNED,
  VOTE_AGAINST_RETURNED,
  GOVERNANCE_CONTRACT_CHANGED,
  GET_VOTE_STATUS,
  GET_VOTE_STATUS_RETURNED,
  REGISTER_VOTE_RETURNED,
  REGISTER_VOTE
} from '../../constants/constants'

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  between: {
    width: '40px'
  },
  intro: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '400px'
  },
  introCenter: {
    minWidth: '100%',
    textAlign: 'center',
    padding: '48px 0px'
  },
  investedContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    minWidth: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: '800px',
    }
  },
  connectContainer: {
    padding: '12px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '450px',
    [theme.breakpoints.up('md')]: {
      width: '450',
    }
  },
  actionButton: {
    '&:hover': {
      backgroundColor: "#2F80ED",
    },
    padding: '12px',
    backgroundColor: "#2F80ED",
    borderRadius: '1rem',
    border: '1px solid #E1E1E1',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      padding: '15px',
    }
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
  disaclaimer: {
    padding: '12px',
    border: '1px solid rgb(174, 174, 174)',
    borderRadius: '0.75rem',
    marginBottom: '24px',
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flex: 1,
    whiteSpace: 'nowrap',
    fontSize: '0.83rem',
    textOverflow:'ellipsis',
    cursor: 'pointer',
    padding: '28px 30px',
    borderRadius: '50px',
    border: '1px solid '+colors.borderBlue,
    alignItems: 'center',
    maxWidth: '500px',
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  walletAddress: {
    padding: '0px 12px'
  },
  walletTitle: {
    flex: 1,
    color: colors.darkGray
  },
  proposalContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  field: {
    minWidth: '100%',
    paddingBottom: '20px'
  },
  fieldTitle: {
    paddingLeft: '20px'
  },
  titleInput: {
    borderRadius: '25px'
  },
  headingName: {
    paddingTop: '5px',
    flex: 2,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 'auto',
    }
  },
  heading: {
    display: 'none',
    paddingTop: '12px',
    flex: 1,
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      paddingTop: '5px',
      display: 'block'
    }
  },
  assetSummary: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap'
    }
  },
  assetIcon: {
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    borderRadius: '20px',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    cursor: 'pointer',
    marginRight: '20px',
    [theme.breakpoints.up('sm')]: {
      height: '40px',
      width: '40px',
      marginRight: '24px',
    }
  },
  grey: {
    color: colors.darkGray
  },
  expansionPanel: {
    maxWidth: 'calc(100vw - 24px)',
    width: '100%'
  },
  stakeTitle: {
    width: '100%',
    color: colors.darkGray,
  },
  claimContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '28px 30px',
    borderRadius: '50px',
    border: '1px solid '+colors.borderBlue,
    margin: '20px',
    background: colors.white,
    width: '100%'
  },
  stakeButton: {
    minWidth: '300px'
  },
  proposerAddressContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > svg': {
      visibility: 'hidden',
    },
    '&:hover > svg': {
      visibility: 'visible'
    }
  }
})

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

class Swap extends Component {

  constructor(props) {
    super()

    const account = store.getStore('account')
    const proposals = store.getStore('proposals')
    const votingStatus = store.getStore('votingStatus')

    this.state = {
      loading: false,
      account: account,
      proposals: proposals,
      value: 1,
      votingStatus: votingStatus,
    }

    dispatcher.dispatch({ type: GET_PROPOSALS, content: {} })
    dispatcher.dispatch({ type: GET_VOTE_STATUS, content: {} })
  }

  componentWillMount() {
    emitter.on(ERROR, this.errorReturned);
    emitter.on(CONFIGURE_RETURNED, this.configureReturned)
    emitter.on(PROPOSE_RETURNED, this.showHash)
    emitter.on(GET_PROPOSALS_RETURNED, this.proposalsReturned)
    emitter.on(VOTE_FOR_RETURNED, this.showHash);
    emitter.on(VOTE_AGAINST_RETURNED, this.showHash);
    emitter.on(GET_VOTE_STATUS_RETURNED, this.voteStatusReturned);
    emitter.on(REGISTER_VOTE_RETURNED, this.registerVoteReturned);
  }

  componentWillUnmount() {
    emitter.removeListener(ERROR, this.errorReturned);
    emitter.removeListener(CONFIGURE_RETURNED, this.configureReturned)
    emitter.removeListener(PROPOSE_RETURNED, this.showHash)
    emitter.removeListener(GET_PROPOSALS_RETURNED, this.proposalsReturned)
    emitter.removeListener(VOTE_FOR_RETURNED, this.showHash);
    emitter.removeListener(VOTE_AGAINST_RETURNED, this.showHash);
    emitter.removeListener(GET_VOTE_STATUS_RETURNED, this.voteStatusReturned);
    emitter.removeListener(REGISTER_VOTE_RETURNED, this.registerVoteReturned);
  };

  errorReturned = (error) => {
    this.setState({ loading: false })
  };

  registerVoteReturned = (txHash) => {
    this.setState({
      votingStatus: store.getStore('votingStatus'),
      loading: false
    })
    this.showSnackbar(txHash, 'Hash')
  };

  voteStatusReturned = () => {
    this.setState({
      votingStatus: store.getStore('votingStatus'),
      loading: false
    })
  }

  proposalsReturned = () => {
    const proposals = store.getStore('proposals')
    this.setState({ proposals: proposals, loading: false })
  }

  showHash = (txHash) => {
    this.showSnackbar(txHash, 'Hash')
  };

  showAddressCopiedSnack = () => {
    this.showSnackbar("Address Copied to Clipboard", 'Success')
  }

  showSnackbar = (message, type) => {
    this.setState({ snackbarMessage: null, snackbarType: null, loading: false })
    const that = this
    setTimeout(() => {
      const snackbarObj = { snackbarMessage: message, snackbarType: type }
      that.setState(snackbarObj)
    })
  }

  configureReturned = () => {
    this.setState({ loading: false })
  }

  render() {
    const { classes, i18n, t } = this.props;
    const {
      value,
      account,
      loading,
      modalOpen,
      snackbarMessage,
      title,
      titleError,
      description,
      descriptionError,
      votingStatus,
    } = this.state

    var address = null;
    if (account.address) {
      address = account.address.substring(0,6)+'...'+account.address.substring(account.address.length-4,account.address.length)
    }

    return (
      <div className={ classes.root }>
        <Typography variant="h2" className={ classes.title }>
          {t('Swap.Title')}
        </Typography>
        <Typography variant="h3" className={ classes.subtitle }>
            <Link href="#" target="_blank" className=  { classes.linkLiquidity } >
                {t('Stake.AddLiquidity')}
            </Link>
            <Link href="#" target="_blank" className={ classes.linkYield } >
                {t('Footer.YieldCalculator')}
            </Link>
        </Typography>

        <div className={ classes.intro }>
          <Card className={ classes.addressContainer } onClick={this.overlayClicked}>
            <Typography variant={ 'h3'} className={ classes.walletTitle } noWrap>{t('RewardPools.Wallet')}</Typography>
            <Typography variant={ 'h4'} className={ classes.walletAddress } noWrap>{ address }</Typography>
            <div style={{ background: '#DC6BE5', opacity: '1', borderRadius: '10px', width: '10px', height: '10px', marginRight: '3px', marginTop:'3px', marginLeft:'6px' }}></div>
          </Card>
        </div>


        <div>
        <div className={ classes.overviewField }>
  
        <div className={ classes.balances }>
          <Typography variant='h4' onClick='#' className={ classes.value } noWrap>{ 'Balance: ' + 20 } COCOS</Typography>
        </div>
        <div>
          <TextField
            fullWidth
            disabled={ loading }
            className={ classes.actionInput }
            id={ 'amount' }
            value={ 2000 }
            error={ "" }
            onChange={ this.onChange }
            placeholder="0.00"
            variant="outlined"
            // InputProps={{
            //   endAdornment: <InputAdornment position="end" className={ classes.inputAdornment }><Typography variant='h3' className={ '' }>{ 'COCOS' }</Typography></InputAdornment>,
            //   startAdornment: <InputAdornment position="end" className={ classes.inputAdornment }>
            //     <div className={ classes.assetIcon }>
            //       <img
            //         alt=""
            //         // src={ require('../../assets/'+'-logo.png') }
            //         src= ""
            //         height="30px"
            //       />
            //     </div>
            //   </InputAdornment>,
            // }}
          />

          <Button
            variant="outlined"
            color="secondary"
            onClick={ () => { this.onSwap() }  }
          >
            <Typography variant={ 'h4'}>{t('Swap.SwapAction')}</Typography>
          </Button>
        </div>
      </div>


        </div>
        
        {/* { this.renderProposals() }
        { snackbarMessage && this.renderSnackbar() }
        { loading && <Loader /> } */}

      </div>
    )
  }

  onSwap = () => {
    alert('onswap');
  }


  goToDashboard = () => {
    window.open('https://gov.yfii.finance/', "_blank")
  }

  handleTabChange = (event, newValue) => {
    this.setState({value:newValue})
  };

  startLoading = () => {
    this.setState({ loading: true })
  }

  handleChange = (id) => {
    this.setState({ expanded: this.state.expanded === id ? null : id })
  }

  copyAddressToClipboard = (event, address) => {
    event.stopPropagation();
    navigator.clipboard.writeText(address).then(() => {
      this.showAddressCopiedSnack();
    });
  }

  onChange = (event) => {
    let val = []
    val[event.target.id] = event.target.value
    this.setState(val)
  }

  onPropose = () => {
    this.props.history.push('propose')
  }

  onRegister = () => {
    this.setState({ loading: true })
    dispatcher.dispatch({ type: REGISTER_VOTE, content: {  } })
  }

  renderModal = () => {
    return (
      <UnlockModal closeModal={ this.closeModal } modalOpen={ this.state.modalOpen } />
    )
  }

  renderSnackbar = () => {
    var {
      snackbarType,
      snackbarMessage
    } = this.state
    return <Snackbar type={ snackbarType } message={ snackbarMessage } open={true}/>
  };

  overlayClicked = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

}

export default withNamespaces()(withRouter(withStyles(styles)(Swap)));