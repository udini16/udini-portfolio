import wave
import struct
import random

def generate_pixel_hit_sound():
    sample_rate = 44100
    duration = 0.15 # seconds
    num_samples = int(sample_rate * duration)
    
    with wave.open("public/hit.wav", "w") as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        for i in range(num_samples):
            # Generate white noise for that crunchy 8-bit hit sound
            val = random.uniform(-1, 1)
            # Fast exponential/linear decay envelope
            progress = i / num_samples
            envelope = max(0, 1.0 - (progress * 1.5)) 
            
            # Add a bit of descending tone for impact
            freq = 800 - (600 * progress)
            square_wave = 1 if (i % int(sample_rate / freq)) < (sample_rate / freq / 2) else -1
            
            # Mix noise and square wave
            mixed = (val * 0.7) + (square_wave * 0.3)
            
            sample = int(mixed * envelope * 32767)
            wav_file.writeframesraw(struct.pack("<h", sample))

if __name__ == "__main__":
    generate_pixel_hit_sound()
    print("Created public/hit.wav")
