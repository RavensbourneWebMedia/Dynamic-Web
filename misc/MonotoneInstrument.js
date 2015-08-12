function MonotoneInstrument( audioContext )
{
	this.context = audioContext
	
	this.play = function( frequency, stopWhen )
	{
		if (typeof this.oscillator == 'undefined') // which means "if this.oscillator doesn't exist"
		{
			this.oscillator = a.createOscillator()
			this.oscillator.connect( this.context.destination )
			this.oscillator.start(0)
		}	
		this.setFrequency( frequency )
		if (stopWhen) // which means "if stopWhen exists"
		{
			this.stop( stopWhen )
		}
	}
	
	this.stop = function( stopWhen )
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			if (!stopWhen) // which means "if stopWhen doesn't exists"
			{
				stopWhen = 0 // make it stop immediately
			}
			this.oscillator.stop( this.context.currentTime + stopWhen) // stop X seconds after the current time
			this.oscillator = undefined
		}	
	}
	
	this.setFrequency = function( frequency )
	{
		if (typeof this.oscillator != 'undefined') // which means "if this.oscillator exists"
		{
			this.oscillator.frequency.value = frequency
		}	
	}	
}