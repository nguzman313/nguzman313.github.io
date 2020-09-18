---
layout: post
mathjax: true
title: "An Interactivist Critique of Direct Learning"
date: 2020-09-18
---

They assume that the quantities we are capable of recording using our
measurement apparatuses (velocity, angle, etc.) may be combined together into
some other higher order variable which is a function of these variables. For
example, suppose I have velocity $v$, angle $\alpha$, and luminance $l$, and that these are
combined to define some higher order variable $G$ which is a function of these
variables

$$G = g(v, \alpha, l)$$

They stress, however, that we should not fall into elementarism (the idea that to
detect this higher order compound variable we must first detect the individual
variables which go into the function defining the higher order variable and then
use these detected values to compute the function). They say that instead, we
should seek information in the environment that directly specifies the higher
order variable. But what could this mean? Note that the authorʼs seem to be
saying that the entire field of sensory cue integration is invalid (I donʼt know
enough about it to speak on it). What would it mean for the organism to be able
to detect a variable that is a function of other variables without first detecting
those component variables?

Letʼs consider a well studied variable, tau, which is considered to specify time to
contact. Tau is a ratio, and can be equivalently defined by the ratio of object
distance ($Z$) to velocity ($V$) or the ratio of rate of change of object visual angle
($\dot{O} = dO/dt$) to the visual angle itself ($O$)

$$\tau = Z/V = \frac{\dot{O}}{O}$$

It would seem that you could not detect $\tau$ without computing a ratio. There is
good evidence now for neurons in invertebrate lobula that are sensitive to
something like tau, though indirectly via a balance of excitatory and inhibitory
inputs:

- [Escape behavior and neuronal responses to looming stimuli in the crab](https://jeb.biologists.org/content/210/5/865)

- [Computation of object approach by a system of visual motion-sensitiveneurons in the crab](https://journals.physiology.org/doi/pdf/10.1152/jn.00921.2013)

- [Invariance of angular threshold computation in a wide-field looming-sensitive neuron](https://www.jneurosci.org/content/jneuro/21/1/314.full.pdf)

This is, I think, what many neuroscientists mean when they use the word 
_computation_: a neuron or populationʼs activity is correlated with some variable
that is a function of other variables, so it is interpreted as taking these variables
as input and spitting out the function as output. This is the elementarism that
Jacobs and Michaels argue against. But notice that although tau is defined in
terms of a ratio, neural activity sensitive to tau emerges not from a symbolic
division operation using neural activity sensitive to distance and velocity, but
merely from a balance of excitation and inhibition and the geometry of the
invertebrate eye. The computation is not symbolic, it is an _as if_ computation
that emerges from the biophysics and morphology of the organism. This
interpretation offers us a way out of elementarism.

There is one major problem with Jacobs and Michaels approach: despite their
claim that no loans of intelligence are implied by their main premise, there is in
fact an infinite regress of homunculi hiding in their theory. How does the
organism come to be able to detect the information for learning? Is there, as
Jacobs and Michaels refer to it, an “education of attention” that gives the
organism the ability to detect the information for learning? This would be
referred to in the machine learning community as “learning to learn”. But then
does the organism learn to learn to learn? And then learn to learn to learn to
learn? And so on ad infinitum. What is the base or foundation for learning that
allows us to cut off this infinite chain of learners? And you canʼt just pass the
buck to evolution. You need an explanation. The key here is that by externalizing
the error signal outside of the organism, Jacobs and Michaels have not solved
the problem of normativity. If an organismʼs actions are in error, they must be in
error with respect to some process relative to and detectable by the organism.
Though there is sufficient information in the environment for the organism to
detect when it is in error, the error signal itself cannot be in the environment
since the error is

The beauty of this paper is that Bickhard not only posits a theory of
representation and then derives a corresponding theory of learning, he also
goes in the other direction: given necessary conditions for any theory of
learning, he shows that a particular kind of theory of representation is required
for learning, and the interactivist theory is the only one that fits the bill

While all the information that will allow the organism to generate an error signal
is “out there”, the error signal itself is not and must be internal. Here, I expect
most eco psych folks will shake their heads and say something like “all internal
information is merely the isomorphic flow of external ecological information” and
that ecological information does not get internally transformed beyond
isomorphisms. I think this is incorrect, since at some point internal states will
need to be compared to anticipations of those states. I donʼt see any way
around this comparison operation.

But how do we learn from internal states then? Is reinforcement learning (RL) a
good model of learning from internal and external states? At some functional
level, yes, but elsewhere Bickhard has expressed doubts about the explanatory
potential of RL if we are committed to naturalism, namely: where does the task
specific reward function come from? The standard reply is usually to pass the
buck to evolution and assume that reward functions get built into the organism

over the course of phylogenetic time. Turns out we can get away with not pre-
defining a reward function or having one built in by evolution. To see how this is

possible, letʼs take a look at this paper by Sergey Levine:

[Visual Reinforcement Learning with Imagined Goals](https://papers.nips.cc/paper/8132-visual-reinforcement-learning-with-
imagined-goals.pdf)

This paper does a couple things:

1. Realizing that raw pixels donʼt provide meaningful error signals, they first
   use a variational autoencoder (VAE) to transform those images to a space
   where distances between images are more useful.
3. They use these VAEs to generate “imagined goals” which are basically
   internal states that the robots can compare their actual end states to in
   order to generate an error signal for learning following a sequence of
   actions.

Here, any embodied cognition or ecological psychology folks will groan, faced
with yet another instance of the information processing view of the mind, but
donʼt fear. Organisms donʼt need VAEs in their brains because they have access
to ecological information! If organisms could only detect raw images, then they
probably would need something like a VAE in their brain in order to obtain better
learning signals. But thankfully, organisms can detect far more than just raw
pixels: they can directly detect intricate patterns of optic flow and other ambient
energy arrays which are useful for guiding behavior during particular tasks (the
ecological information specifying affordances).
