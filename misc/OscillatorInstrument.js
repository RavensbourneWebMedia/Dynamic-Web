function OscillatorInstrument (audioContext)
{
  this.context = audioContext

  this.play = function()
  {
    this.oscillator = this.context.createOscillator()
    this.oscillator.connect(this.context.destination)
    this.oscillator.start(0)
  }

  this.stop = function()
  {
    this.oscillator.stop(0)
  }

  this.changeFrequency = function(val)
  {
    this.oscillator.frequency.value = val
  }

  this.changeDetune = function(val)
  {
    this.oscillator.detune.value = val
  }

  this.changeType = function(type)
  {
    this.oscillator.type = type
  }
}
