import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import PropTypes from 'prop-types'
import './CmModal.css'
import {
	Container,
	Main,
	Add,
	MainText,
	Us,
	Em,
	Tl,
	MainLink,
	Ed,
	ModalClose,
  ModalC,
  TextHead,
} from './Account.styles'
import EditUser from './EditUser'
import Address from './Address'
import ProfileImage from './ProfileImage'

const Account = ({ user: { user }, profile: { profile } }) => {
	const [open, setOpen] = useState(false)
	const [view, setView] = useState(false)

	const closeIcon = <ModalClose />

	const onOpenModal = () => {
		setOpen(true)
	}

	const onCloseModal = () => {
		setOpen(false)
	}

	const onViewModal = () => {
		setView(true)
	}

	const onCloseViewModal = () => {
		setView(false)
	}

	return (
		<Fragment>
			<Container>
				<Main>
					<Ed onClick={onOpenModal} />
					<MainText>
			
						<Us /> {user && user.lastName} {user && user.firstName}
					</MainText>
					<MainText>
			
						<Em /> {user && user.email}{' '}
					</MainText>
					<MainText>
			
						<Tl /> {user && user.phoneNumber}
					</MainText>

					<MainLink to = '/forgotpassword'>Change Password</MainLink>

					<Modal
						open={open}
						onClose={onCloseModal}
						closeIcon={closeIcon}
						classNames={{ overlay: 'customOverlay', modal: 'customModal' }}
					>
						<ModalC>
							<EditUser />
						</ModalC>
					</Modal>
				</Main>
   
				<Add>
					<Ed onClick={onViewModal} />
					<TextHead>Delivery Address</TextHead>
					<MainText> {profile && profile.address} </MainText>
					<Modal
						open={view}
						onClose={onCloseViewModal}
						closeIcon={closeIcon}
						classNames={{ overlay: 'customOverlay', modal: 'customModal' }}
					>
						<ModalC>
							<Address />
						</ModalC>
					</Modal>

					<ProfileImage />
				</Add>
			</Container>
		</Fragment>
	)
}

Account.propTypes = {
	user: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	user: state.user,
	profile: state.profile,
})

export default connect(mapStateToProps)(Account)
