# @version 0.3.1

amount: public(uint256)

@external
def deposit(_amount: uint256 = MAX_UINT256):
        self.amount = _amount

@external
def withdraw() -> uint256:
        return 0


