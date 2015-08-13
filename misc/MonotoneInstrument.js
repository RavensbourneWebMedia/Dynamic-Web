function MonotoneInstrument( audioContext )
{
	this.context = audioContext

	this.oscillator = undefined // we'll define it in this.play()
	
	// Gain is a node to control the output volume
	// see https://developer.mozilla.org/en-US/docs/Web/API/GainNode
	this.volume = this.context.createGain() 
	
	this.play = function( frequency, stopWhen )
	{
		if (typeof this.oscillator == 'undefined') // which means "if this.oscillator doesn't exist"
		{
			this.oscillator = a.createOscillator()

			// connections: oscillator → volume → destination
			this.oscillator.connect( this.volume )
			this.volume.connect( this.context.destination )

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

	this.setVolume = function( volume )
	{
		this.volume.gain.value = volume
	}

	/* TODO 
	this.setNote() + noteToFrequency()	
	*/
}