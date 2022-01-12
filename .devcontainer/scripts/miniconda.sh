wget -O /tmp/miniconda.sh https://repo.anaconda.com/miniconda/Miniconda3-py39_4.10.3-Linux-x86_64.sh

bash /tmp/miniconda.sh -b -p $HOME/miniconda3


echo "" >> ~/.bashrc
echo "source ~/miniconda3/bin/activate" >> ~/.bashrc
